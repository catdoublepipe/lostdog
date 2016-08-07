const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController.js');
const dogController = require('../controllers/dogController.js');

/*
 * Dog collection routes
 */
 router.get('/dog', dogController.getDogListByDistance);
 router.post('/dog', dogController.setDog);
 router.get('/dog/:dogid', dogController.getDogById);
 router.put('/dog/:dogid', dogController.updateDogById);
 router.delete('/dog/:dogid', dogController.deleteDogById);

 /*
  * Comment sub-document routes
  */
  router.post('/dog/:dogid/comment', commentController.setComment);
  router.get('/dog/:dogid/comment/:commentid', commentController.getCommentById);
  router.put('/dog/:dogid/comment/:commentid', commentController.updateCommentById);
  router.delete('/dog/:dogid/comment/:commentid', commentController.deleteCommentById);

  module.exports = router;
