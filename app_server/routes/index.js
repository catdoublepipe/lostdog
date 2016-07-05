var controllerDogs = require('../controllers/dogs');
var controllerAbout = require('../controllers/about');
var controllerLogin = require('../controllers/login')

var express = require('express');
var router = express.Router();

router.get('/', controllerDogs.homePage);
router.get('/dog', controllerDogs.dogInfo);
router.get('/dog/lost', controllerDogs.registerLostDog);
router.get('/dog/found', controllerDogs.foundLostDog);

router.get('/login', controllerLogin);
router.get('/about', controllerAbout);

module.exports = router;
