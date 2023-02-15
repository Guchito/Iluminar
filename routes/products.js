var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/lamps', productsController.productList);


module.exports = router;
