const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const {postMP,getMPPayment,/*refunded*/} = require('../Controllers/MercadoPago');


router.post('/', postMP);
router.get('/payment', getMPPayment);
//router.get('/refund', refunded);



module.exports = router
