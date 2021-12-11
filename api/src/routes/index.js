const { Router } = require('express');
const mapsRoute = require('./Maps');
const orderRoute = require('./Order');
const userRoute = require('./User');
const carRoute = require('./Car');
const suggestionRoute = require('./SuggestionBox');
const mercadoPagoRoute = require('./MercadoPago');
const chatRoute = require('./Chat.js');
const mailRoute = require('./Mail.js');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.use('/maps', mapsRoute)
router.use('/order', orderRoute)
router.use('/user', userRoute)
router.use('/car', carRoute)
router.use('/suggestionbox', suggestionRoute)
router.use('/mercadopago', mercadoPagoRoute)
router.use('/chat', chatRoute)
router.use('/mail', mailRoute)



module.exports = router;
