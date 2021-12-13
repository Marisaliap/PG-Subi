const { Router } = require('express');
const router = Router();
const express = require('express');
router.use(express.json());
const { getSuggestionBox, postSuggestionBox, deleteSuggestionBox } = require('../Controllers/SuggestionBox.js') //IMPORTO FUNCIONES


router.get('/',getSuggestionBox);
router.post('/add',postSuggestionBox)
router.delete('/:id',deleteSuggestionBox)


module.exports = router