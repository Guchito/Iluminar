var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index);
router.get('/error', mainController.error);

module.exports = router;
