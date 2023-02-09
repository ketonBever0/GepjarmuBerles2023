const express = require('express');
const router = express.Router();
const {getVehicles, getVehicleBrands, getVehicleBrandTypes} = require('../controllers/autoController');

router.get('/jarmuvek', getVehicles);
router.get('/markak', getVehicleBrands);
router.get('/modellek', getVehicleBrandTypes);

module.exports = router;