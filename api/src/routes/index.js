const { Router } = require('express');
const mapsRoute = require('./Maps');
const userRoute = require('./User');
const carRoute = require('./Car');
const suggestionRoute = require('./SuggestionBox');
const mercadoPagoRoute = require('./MercadoPago');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.use('/maps', mapsRoute)
router.use('/user', userRoute)
router.use('/car', carRoute)
router.use('/suggestionbox', suggestionRoute)
router.use('/mercadopago', mercadoPagoRoute)

module.exports = router;
