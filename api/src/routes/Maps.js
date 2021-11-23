const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const { getRouteInfo } = require('../Controllers/Route') //IMPORTO FUNCIONES



// router.get('/', async (req, res) => {           //TRAE LA INFO ENTRE DOS PUNTOS
//  const {long1, lat1, long2, lat2} = req.query   
//  const routeInfo = await getRouteInfo(long1, lat1, long2, lat2)
//  res.send(routeInfo)
// })

// router.get('/location', async (req, res) => { //TRAE LA INFO DE UN PUNTO
//     try {
//         const {name} = req.query
//         const cityInfo = await getCityInfo(name)
//         return res.send(cityInfo)  
//     } catch (error) {
//         res.status(404).send('City not found')
//     }
// }) 
router.get('/',getRouteInfo)

module.exports = router
