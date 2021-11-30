const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const { getSuggestionBox, postSuggestionBox } = require('../Controllers/SuggestionBox.js') //IMPORTO FUNCIONES


router.get('/',getSuggestionBox);
router.post('/add',postSuggestionBox)


module.exports = router
