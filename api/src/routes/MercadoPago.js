const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const {getMP,getMPById,getMPPayment} = require('../Controllers/MercadoPago');


router.post('/', getMP);
router.get('/payment/:id', getMPById);
router.get('/payment', getMPPayment);


module.exports = router
