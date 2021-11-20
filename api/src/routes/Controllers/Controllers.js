const {Users, Routes} = require('../../db.js'); //ME TRAIGO LOS MODELS
const axios = require('axios');
const token = 'pk.eyJ1IjoiZmFic2FudGFuZHJlYSIsImEiOiJja3czbGFzNmw1MDVwMzJtb3F2ajBobzlqIn0.HtizxCUDY-hUg5ZxLPArDg';

const kilometers = (distance) => { //PASA LA DISTANCIA A KMS
    return Math.round(distance / 1000) + ' km'
}

const hours = (num) => {    // TRANSFORMA EL TIEMPO EN HRS/HRS-MIN
    const timeArray = (num/3600).toString().split('.')
    const decimals = timeArray[1].slice(0,2)
    const minutes = Math.floor(decimals / 60)

    if (timeArray > 0 && minutes > 0) {
        return parseInt(timeArray[0]) + ' hrs ' + parseInt(minutes) + ' mins.'
    }
    if (timeArray <= 0 && minutes > 0) {
        return parseInt(minutes) + ' mins.'
    }
    
    
    return parseInt(timeArray[0]) + ' hrs.'
}

const getRouteInfo = async (long1, lat1, long2, lat2) => {
 const routeInfo = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${long1}%2C${lat1}%3B${long2}%2C${lat2}?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=${token}`)
 
 const data = routeInfo.data
 const distance = data.routes[0].distance
 const time = data.routes[0].duration
 const response = {
     distance: kilometers(distance),
     time: hours(time)
 }
 console.log(response)
 return response
}

const getCityInfo = async (name) => {
    const cityInfo = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?country=ar&access_token=${token}`)
    const cities = cityInfo.data.features.map(city => (
        {
                name: city.place_name,
                coordinates: city.center
        }
    ))
    console.log(cities)
    return cities
}
module.exports = {
    getRouteInfo,
    getCityInfo
}