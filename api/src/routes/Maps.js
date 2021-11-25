const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const { getRouteInfo } = require('../Controllers/Route') //IMPORTO FUNCIONES


router.get('/',getRouteInfo)

module.exports = router
