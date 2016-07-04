var controllerDogs = require('../controllers/dogs');
var controllerAbout = require('../controllers/about');

var express = require('express');
var router = express.Router();

router.get('/', controllerDogs.homePage);
router.get('/dog', controllerDogs.dogInfo);
router.get('/add', controllerDogs.add);
router.get('/about', controllerAbout);

module.exports = router;
