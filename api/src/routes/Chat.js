const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const {getChat,postChat,deleteChat} = require('../Controllers/Chat.js');

router.get('/:id',getChat);
router.post('/add',postChat);
router.delete('/:id', deleteChat)
module.exports = router
