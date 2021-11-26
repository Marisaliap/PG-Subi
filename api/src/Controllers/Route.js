const { Route } = require('../db.js');
const axios = require('axios');
const { kilometers, hours } = require('./Function'); // ME TRAIGO LAS FUNCTIONS
//const { where } = require('sequelize/types');
const { TOKEN } = process.env;

const getRouteInfo = async (req, res, next) => {
    try {

        let {
            long1,
            lat1,
            long2,
            lat2,
            name,
        } = req.query
        name = name.toLowerCase()


        var distance, time, cordenadas, cities, info, city
        if (name) {
            info = (await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?country=ar&access_token=${TOKEN}`)).data.features
            cities = info.map(city => (
                {
                    name: city.place_name,
                    coordinates: city.center
                }
            ))

 
            city = cities.filter(city => city.name.toLowerCase() === name)
           

        }


        else if (long1 && lat1 && long2 && lat2) {
            info = (await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${long1}%2C${lat1}%3B${long2}%2C${lat2}?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=${TOKEN}`)).data
            distance = info.routes[0].distance
            time = info.routes[0].duration

            cordenadas = {
                distance: kilometers(distance),
                time: hours(time),
            }
        }

        return res.send({
            cities,
            cordenadas,
            city
        })

    }

    catch (error) {
        next( error)

    }

}

const postRoute= async (req, res, next) => {
    try{
        const {
            origin,
            destiny,
            date,
            hours,
            place,
            restriction,
        }=req.body;
        const route = await Route.findOrCreate({
              where: {
                origin,
                destiny,
                date,
                hours,
                place,
                restriction,
                
              }
            
          })
        res.send(route)
      

    }catch(error){
        next(error)
    }
}

const getRoute = async (req, res, next) => {
    try {
        let route;
        const {id} = req.params;
        if(id){
            route = await Route.findByPk(id);
            return res.send(route);
        }
      route = await Route.findAll();
      return res.send(route);
    } catch (e) {
      next(e);
    }
  }

  const putRoute = async (req, res) => {
      try {
          const {id} = req.params;
          const {date, hours, restriction, place} = req.body;
          const route = await Route.findByPk(id);
          route.update(
              {
               date,
               hours,
               restriction,
               place
              }
         )
         res.send(route);
      } catch (error) {
          res.send(error)
      }
  }

  const deleteRoute = async (req, res, next) => {
      try {
          const {id} = req.params;
          const route = await Route.findByPk(id);
          await route.destroy();
          res.send("Registro Eliminado")
      } catch (error) {
          next(error);
      }
  }

module.exports = {
    getRouteInfo,
    postRoute,
    getRoute,
    putRoute,
    deleteRoute,
}