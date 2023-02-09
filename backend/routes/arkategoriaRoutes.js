const express = require('express');
const router = express.Router();
const {getVehicleTypes} = require('../controllers/arkategoriaContoller');

router.get('/', getVehicleTypes);

module.exports = router;


