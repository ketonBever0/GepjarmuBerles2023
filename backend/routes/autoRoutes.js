const express = require('express');
const router = express.Router();
const {
    getVehicles,
    getVehicleBrands,
    getVehicleBrandTypes,
    getVehiclePassengerSeatsCount,
    filterByBrandVehicles,
    filterByBrandType,
    filterByPassengerCount

} = require('../controllers/autoController');

router.get('/jarmuvek', getVehicles);
router.get('/markak', getVehicleBrands);
router.get('/modellek', getVehicleBrandTypes);
router.get('/ferohelyek', getVehiclePassengerSeatsCount);
router.get('/marka/:keresettMarka', filterByBrandVehicles);
router.get('/modell/:keresettModell', filterByBrandType);
router.get('/ferohely/:keresettFerohely', filterByPassengerCount);

module.exports = router;