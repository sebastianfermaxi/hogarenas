const express = require('express');
const router = express.Router();
const leerPromos = require ('../Controllers/leerPromos')

router.get('/promos', leerPromos);

module.exports = router;