const { Router } = require('express');
const mapsRoute = require('./Maps');
const userRoute = require('./User');
const carRoute = require('./Car');
const suggestionRoute = require('./SuggestionBox');


const router = Router();

router.use('/maps', mapsRoute)
router.use('/user', userRoute)
router.use('/car', carRoute)
router.use('/suggestionbox', suggestionRoute)


module.exports = router;
