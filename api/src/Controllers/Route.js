const { Route,User,Car } = require("../db.js");
const axios = require("axios");
const { kilometers, hours } = require("./Function"); // ME TRAIGO LAS FUNCTIONS
//const { where } = require('sequelize/types');
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
      patentCar,
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
        origin,
        destiny,
        price,
        date,
        hours,
        place,
        restriction,
      });


    await route.addUser(idUser);
    const car = await Car.findByPk(patentCar)
    await car.addRoute(route);


    res.send(route);
  } catch (error) {
    next(error);
  }
};

const getRoute = async (req, res, next) => {
  try {
    let { restriction } = req.query;
    const { id } = req.params;
    let routes;
    if (id) {
      routes = await Route.findByPk(id,{ include: [User, Car] });
      return res.send(routes);
    }

    routes = await Route.findAll({
      attributes: ["origin","destiny","date","hours","place","id"],
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


    if (restriction) {
      //Filtro de restricciones
      restriction = restriction.split(",");

      routes = routes.filter((route) => {
        let restricRoute = route.restriction.split(",");
        restricRoute = restriction.map((r) => restricRoute.includes(r));

        if (restricRoute.includes(false)) return false;
        else return true;
      });
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
