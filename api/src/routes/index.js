const { Router } = require('express');
const mapsRoute = require('./Maps');
const userRoute = require('./User');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/maps', mapsRoute)  //TODAS LAS RUTAS VAN A TENER /MAPS ADELANTE
router.use('/user', userRoute)  //TODAS LAS RUTAS VAN A TENER /MAPS ADELANTE

module.exports = router;
