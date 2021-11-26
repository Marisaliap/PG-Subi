const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const { postUser,getUser, } = require('../Controllers/User');
// const { allPost} = require('../Controllers/Post');
const { getPost, setPost } = require('../Controllers/Post');
// ---------------------> rutas de los users <---------------------
router.get('/',getUser);
router.get('/:id',getUser);
router.post('/add',postUser);
// ------------------> rutas de los comentarios <------------------
router.get('/post',getPost);
router.post('/post',setPost);
// router.get('/post/:id',allPost);
// router.post('/post',allPost);

module.exports = router