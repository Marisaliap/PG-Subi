const { Users, Routes } = require('../db.js'); //ME TRAIGO LOS MODELS
const axios = require('axios');
const { kilometers, hours } = require('./Function') // ME TRAIGO LAS FUNCTIONS
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

            // cities = cities.find(name)
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


    //  const routeInfo = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${long1}%2C${lat1}%3B${long2}%2C${lat2}?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=${token}`)

    //  const data = routeInfo.data
    //  const distance = data.routes[0].distance
    //  const time = data.routes[0].duration
    //  const response = {
    //      distance: kilometers(distance),
    //      time: hours(time)
    //  }
    //  console.log(response)
    //  return response
}

// const getCityInfo = async (name) => {
//     const cityInfo = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?country=ar&access_token=${token}`)
//     const cities = cityInfo.data.features.map(city => (
//         {
//             name: city.place_name,
//             coordinates: city.center
//         }
//     ))
//     console.log(cities)
//     return cities
// }
const postRoute= async (req, res, next) => {}
module.exports = {
    getRouteInfo,
    // getCityInfo
}