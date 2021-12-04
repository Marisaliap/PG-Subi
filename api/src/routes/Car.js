const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const { postCar, getCar, putCar, deleteCar } = require('../Controllers/Car.js') //IMPORTO FUNCIONES


router.get('/',getCar);
router.post('/add',postCar)
router.put('/:patent',putCar)
router.delete('/:patent', deleteCar)
module.exports = router
 
