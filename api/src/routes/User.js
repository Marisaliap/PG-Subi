const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const { postUser,getUser,putUser, deleteUser, putUserCal } = require('../Controllers/User');
const {getPost,setPost} = require('../Controllers/Post');

router.get('/post/:id',getPost);
router.post('/post',setPost);
router.get('/',getUser);
router.get('/:id',getUser);
router.post('/add',postUser)
router.put('/:id',putUser)
router.put('/rating/:id', putUserCal)
router.delete('/:id', deleteUser)
module.exports = router
