var controllerDogs = require('../controllers/dogs');
var controllerAbout = require('../controllers/about');
var controllerUsers = require('../controllers/users')

var express = require('express');
var router = express.Router();

router.get('/', controllerDogs.homePage);
router.get('/dog', controllerDogs.dogInfo);
router.get('/dog/lost', controllerDogs.registerLostDog);
router.get('/dog/found', controllerDogs.foundLostDog);

router.get('/about', controllerAbout);

router.get('/users/signup', controllerUsers.signUp);
router.get('/users/login', controllerUsers.logIn);

module.exports = router;
