const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const { getRouteInfo, postRoute, getRoute } = require('../Controllers/Route') //IMPORTO FUNCIONES



router.get('/',getRouteInfo)
router.post('/route/add', postRoute)
router.get('/route',getRoute)
router.get('/route/:id',getRoute)

module.exports = router
