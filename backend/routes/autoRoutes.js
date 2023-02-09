const express = require('express');
const router = express.Router();
const {getVehicles} = require('../controllers/autoController');

router.get('/', getVehicles);

module.exports = router;