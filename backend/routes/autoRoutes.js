const express = require('express');
const router = express.Router();
const {getVehicles, getVehicleBrands, getVehicleBrandTypes, getVehiclePassengerSeatsCount} = require('../controllers/autoController');

router.get('/jarmuvek', getVehicles);
router.get('/markak', getVehicleBrands);
router.get('/modellek', getVehicleBrandTypes);
router.get('/ferohelyek', getVehiclePassengerSeatsCount);



module.exports = router;