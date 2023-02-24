const express = require('express');
const router = express.Router();
const {protect} = require('../mwares/authMiddleWare');

const {register, login, userData} = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.get('/data', userData);


module.exports = router;