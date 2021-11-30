const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const { postUser,getUser,putUser, deleteUser } = require('../Controllers/User');
const {getPost,setPost} = require('../Controllers/Post');

router.get('/post',getPost);
router.post('/post',setPost);
router.get('/',getUser);
router.get('/:id',getUser);
router.post('/add',postUser)
router.put('/:id',putUser)
router.delete('/:id', deleteUser)
module.exports = router
