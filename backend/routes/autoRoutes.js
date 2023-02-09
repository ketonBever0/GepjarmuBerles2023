const express = require('express');
const router = express.Router();
const {
    getVehicles,
    getVehicleBrands,
    getVehicleBrandTypes,
    getVehiclePassengerSeatsCount,
    filterVehicles
} = require('../controllers/autoController');

router.get('/jarmuvek', getVehicles);
router.get('/markak', getVehicleBrands);
router.get('/modellek', getVehicleBrandTypes);
router.get('/ferohelyek', getVehiclePassengerSeatsCount);
router.get('/marka/:keresettMarka', filterVehicles);



module.exports = router;