const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const {postMP,getMPById,getMPPayment} = require('../Controllers/MercadoPago');


router.post('/', postMP);
router.get('/payment', getMPPayment);


module.exports = router
