const express = require('express');
const leerProductos = require('../Controllers/leerProductos');
const router = express.Router();

router.get('/', leerProductos);

module.exports = router;