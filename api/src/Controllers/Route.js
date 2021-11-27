const { Route, User, Car } = require("../db.js");
const axios = require("axios");
const { kilometers, hours } = require("./Function"); // ME TRAIGO LAS FUNCTIONS
const { TOKEN } = process.env;

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
      price,
      date,
      hours,
      place,
      restriction
    } = req.body;
    console.log(idUser)

    const route = await Route.create(
      {
        originName,
        destinyName,
        origin,
        destiny,
        price,
        date,
        hours,
        place,
        restriction,
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
    let { restriction,price,time,date} = req.query;
    const { id } = req.params;
    let routes;

    if (id) {
      routes = await Route.findByPk(id,{
        include: {
          model: User,
          include: Car
        }
      });
      return res.send(routes);
    }

    routes = await Route.findAll({
      attributes: ["origin","destiny","date","hours","place","id","price","originName","destinyName"],
      include:
        {
          model: User,
          attributes: ["name","photo","lastName","genre","age","calification"],
          include: {
            model: Car,
            attributes: ["patent","color","brand","model"],
          },
        }

    });

    if (date) {
      routes = routes.filter((route) => {
        if (route.date == date) return true;
        else return false;
      });
    }


    if (price === "desc" || !price || price === "") {
      routes = routes.sort((a, b) => b.price - a.price);
    } else if (price === "asc") {
      routes = routes.sort((a, b) => a.price - b.price);
    }


    if (time === "desc" || !time || time === "") {
      routes = routes.sort((a, b) => parseInt(b.hours.split(':').join('')) - parseInt(a.hours.split(':').join('')));
    } else if (time === "asc") {
      routes = routes.sort((a, b) => parseInt(a.hours.split(':').join('')) - parseInt(b.hours.split(':').join('')));
    }


    return res.send(routes);
  } catch (e) {
    next(e);
  }
};

const putRoute = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, hours, restriction, place } = req.body;
        const route = await Route.findByPk(id);
        route.update({
            date,
            hours,
            restriction,
            place,
        });
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
