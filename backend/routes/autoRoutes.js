const express = require('express');
const router = express.Router();
const {
    getVehicles,
    getVehicleBrands,
    getVehicleBrandTypes,
    getVehiclePassengerSeatsCount,
    filterByBrandVehicles,
    filterByBrandType,
    filterByPassengerCount,
    filterByBrandAndVehicleType,
    filterByPassengerCountAndVehicleType,
    addNewCar

} = require('../controllers/autoController');

router.get('/jarmuvek', getVehicles);
router.post('/jarmuvek', addNewCar);


router.get('/markak', getVehicleBrands);
router.get('/modellek/marka/:marka', getVehicleBrandTypes);
router.get('/ferohelyek', getVehiclePassengerSeatsCount);
router.get('/marka/:keresettMarka', filterByBrandVehicles);
router.get('/modell/:keresettModell', filterByBrandType);
router.get('/ferohely/:keresettFerohely', filterByPassengerCount);
router.get('/markatipus/marka/:marka/tipus/:tipus', filterByBrandAndVehicleType);
router.get('/ferohelytipus/ferohely/:ferohely/tipus/:tipus', filterByPassengerCountAndVehicleType);




module.exports = router;