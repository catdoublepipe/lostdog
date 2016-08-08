const mongoose = require('mongoose');
const dogModel = mongoose.model('Dog');

const sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

const successStatusJson = {
  "status": "success"
};

module.exports.setComment = function(req, res, next) {
  sendJsonResponse(res, 200, successStatusJson);
};

module.exports.getCommentById = function(req, res, next) {
  sendJsonResponse(res, 200, successStatusJson);
};

module.exports.updateCommentById = function(req, res, next) {
  sendJsonResponse(res, 200, successStatusJson);
};

module.exports.deleteCommentById = function(req, res, next) {
  sendJsonResponse(res, 200, successStatusJson);
};
