const express = require('express');
const router = express.Router();
const {getVehicles, getVehicleBrands} = require('../controllers/autoController');

router.get('/jarmuvek', getVehicles);
router.get('/markak', getVehicleBrands);

module.exports = router;