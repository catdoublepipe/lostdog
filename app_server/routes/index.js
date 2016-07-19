const dogController = require('../controllers/dogController');
const aboutController = require('../controllers/aboutController');
const userController = require('../controllers/userController')

const express = require('express');
const router = express.Router();

router.get('/', dogController.getLostDogList);
router.get('/dog', dogController.getLostDog);
router.get('/dog/lost', dogController.registerLostDog);
router.get('/dog/found', dogController.registerFoundDog);

router.get('/about', aboutController);

router.get('/user/signup', userController.signUp);
router.get('/user/login', userController.logIn);

module.exports = router;
