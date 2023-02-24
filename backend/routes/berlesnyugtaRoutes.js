const express = require('express');
const router = express.Router();

const {addBerlesNyugta} = require('../controllers/berlesnyugtaController');

router.post('/', addBerlesNyugta);

module.exports = router;