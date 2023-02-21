const express = require('express');
const router = express.Router();

const {register} = require('../controllers/userController');
router.get('/', register);

module.exports = router;