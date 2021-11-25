const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const { postCar, getCar } = require('../Controllers/Car.js') //IMPORTO FUNCIONES


router.get('/',getCar);
router.post('/add',postCar)


module.exports = router
 
