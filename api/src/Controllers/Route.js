const { Route, User, Car, Order } = require("../db.js");
const axios = require("axios");
const { kilometers, hours } = require("./Function"); // ME TRAIGO LAS FUNCTIONS
const { TOKEN } = process.env;
const { postMail } = require('./Mail.js')

const getRouteInfo = async (req, res, next) => {
  try {
    let { long1, lat1, long2, lat2, name } = req.query;

    var distance, time, coordinates, cities, info, city;
    if (name) {
      name = name.toLowerCase();
      info = (
        await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?country=ar&types=place&access_token=${TOKEN}`
        )
      ).data.features;
      cities = info.map((city) => ({
        name: city.place_name,
        coordinates: city.center,
      }));

      city = cities.filter((city) => city.name.toLowerCase() === name);

      if (city.length === 1) {
        cities = city;
      }
    } else if (long1 && lat1 && long2 && lat2) {
      info = (
        await axios.get(
          `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${long1}%2C${lat1}%3B${long2}%2C${lat2}?alternatives=false&geometries=geojson&overview=full&steps=false&access_token=${TOKEN}`
        )
      ).data;
      distance = info.routes[0].distance;
      time = info.routes[0].duration;

      coordinates = {
        distance: kilometers(distance),
        time: hours(time),
        type: "geojson",
        data: {
          type: "Feature",
          geometry: info.routes[0].geometry,
        },
      };
    }

    return res.send({
      cities,
      coordinates,
      city,
    });
  } catch (error) {
    next(error);
  }
};

const postRoute = async (req, res, next) => {
  try {
    const {
      idUser,
      //patentCar,
      originName,
      destinyName,
      origin,
      destiny,
      km,
      time,
      date,
      hours,
      place,
      restriction,
      points,
      center,
    } = req.body;

    let kmNumber = km.split("k")[0];

    let price = ((kmNumber / 10) * 97) / 5;

    price =  Math.ceil(price + price * (10 / 100));

    const route = await Route.create({
      originName,
      destinyName,
      origin,
      destiny,
      date,
      price,
      km,
      time,
      hours,
      place,
      restriction,
      manejante:idUser,
      points,
      center,
    });

    await route.addUser(idUser);
    //const car = await Car.findByPk(patentCar)
    //await car.addRoute(route);

    res.send(route);
  } catch (error) {
    next(error);
  }
};

const getRoute = async (req, res, next) => {
  try {
    let { restriction, order, date, from, to, place } = req.query;
    const { id } = req.params;
    let routes;

    if (id) {
      routes = await Route.findByPk(id, {
        include: {
          model: User,
          include: Car,
        },
      });
      return res.send(routes);
    }

    routes = await Route.findAll({
      attributes: [
        "origin",
        "destiny",
        "date",
        "hours",
        "place",
        "id",
        "price",
        "originName",
        "destinyName",
        "restriction",
        "points",
        "center",
      ],
      include: [
          {model: Order},
        {
          model: User,
          attributes: [
            "name",
            "photo",
            "lastName",
            "genre",
            "age",
            "calification",
          ],
          include: {
            model: Car,
            attributes: ["patent", "color", "brand", "model"],
          },

        }
    ],
    });

    if (from) {
      routes = routes.filter((route) => {
        if (route.originName === from) return true;
        else return false;
      });
    }

    if (to) {
      routes = routes.filter((route) => {
        if (route.destinyName === to) return true;
        else return false;
      });
    }

    if (restriction) {
      restriction = restriction.split(",");

      routes = routes.filter((route) => {
        let restricRoute = route.restriction.split(",");
        restricRoute = restriction.map((r) => restricRoute.includes(r));

        // if (!restriction ||restriction === '') {
        //   routes = routes
        // } else if (restricRoute.includes(false)) return false
        // else return true }

        if (restricRoute.includes(false)) return false;
        else return true;
      });
    } else if (!restriction || restriction === "") {
      routes = routes;
    }

    if (date) {
      routes = routes.filter((route) => {
        if (route.date == date) return true;
        else return false;
      });
    }

    if (place) {
      routes = routes.filter((route) => {
        if (route.place >= place) return true;
        else return false;
      });
    }

    if (order === "time" || !order || order === "") {
      routes = routes.sort(
        (a, b) =>
          parseInt(a.hours.split(":").join("")) -
          parseInt(b.hours.split(":").join(""))
      );
    } else if (order === "price") {
      routes = routes.sort((a, b) => a.price - b.price);
    }

    return res.send(routes);
  } catch (e) {
    next(e);
  }
};

const putRoute = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, hours, restriction, place, idUser } = req.body;
  
    const route = await Route.findByPk(id);
    route.update({
      date,
      hours,
      restriction,
      place,
    });
    if (idUser){
      const manejante = await User.findByPk(idUser) 
      await route.addUser(idUser);
      let mail = await axios.post('http://localhost:3001/mail/add',{
        manejanteEmail: route.manejante,
        manejadoName: manejante.name,
        originName: route.originName,
        destinyName: route.destinyName
      });
      console.log(mail)
    }
    res.send(route);
  } catch (error) {
    res.send(error);
  }
};

const deleteRoute = async (req, res, next) => {
  try {
    const { id } = req.params;
    const route = await Route.findByPk(id);
    await route.destroy();
    res.send("Registro Eliminado");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRouteInfo,
  postRoute,
  getRoute,
  putRoute,
  deleteRoute,
};
