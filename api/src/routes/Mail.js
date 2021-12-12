const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const {postMail} = require('../Controllers/Mail.js');


router.post('/add',postMail);

module.exports = router
