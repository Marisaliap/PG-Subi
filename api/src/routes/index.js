const { Router } = require('express');
const mapsRoute = require('./Maps');
const userRoute = require('./User');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/maps', mapsRoute)  
router.use('/user', userRoute)  

module.exports = router;
