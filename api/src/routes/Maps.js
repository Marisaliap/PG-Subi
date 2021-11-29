const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const { getRouteInfo, postRoute, getRoute , putRoute, deleteRoute} = require('../Controllers/Route') //IMPORTO FUNCIONES



router.get('/',getRouteInfo)
router.post('/route/add', postRoute)
router.get('/route',getRoute)
router.get('/route/:id',getRoute)
router.put('/route/:id',putRoute)
router.delete('/route/:id', deleteRoute)

module.exports = router
