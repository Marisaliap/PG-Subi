const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const { postUser,getUser } = require('../Controllers/User');

router.get('/',getUser);
router.post('/add',postUser)

module.exports = router