const { Router } = require('express');
const mapsRoute = require('./Maps');
const userRoute = require('./User');
const carRoute = require('./Car');
const suggestionRoute = require('./SuggestionBox');
const setDbRoute = require('./SetDb');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/maps', mapsRoute)
router.use('/user', userRoute)
router.use('/car', carRoute)
router.use('/suggestionbox', suggestionRoute)
router.use('/setdb', setDbRoute)

module.exports = router;
