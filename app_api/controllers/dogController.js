const mongoose = require('mongoose');
const dogModel = mongoose.model('Dog');

const sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

const successStatusJson = {
  "status": "success"
};

const notFoundMessage = {
  "message": "Not found."
};

module.exports.getDogListByDistance = function(req, res, next) {
  sendJsonResponse(res, 200, successStatusJson);
};

module.exports.setDog = function(req, res, next) {
  sendJsonResponse(res, 200, successStatusJson);
};

module.exports.getDogById = function(req, res, next) {
  if (req.params && req.params.dogid) {
    dogModel
      .findById(req.params.dogid)
      .exec(function(err, dog) {
        if (!dog) {
          console.log("Error: No dog with supplied id " + req.params.dogid +
            " found.");
          sendJsonResponse(res, 404, notFoundMessage);
          return;
        } else if (err) {
          console.log("Mongoose error in getDogById method: ");
          console.log(err);
          sendJsonResponse(res, 500, notFoundMessage);
          return;
        }
        console.log("Success: Dog with id " + req.params.dogid + " returned.");
        sendJsonResponse(res, 200, dog);
      });
  } else {
    console.log("Error: Dog id missing from the url.");
    sendJsonResponse(res, 404, notFoundMessage);
  }
};

module.exports.updateDogById = function(req, res, next) {
  sendJsonResponse(res, 200, successStatusJson);
};

module.exports.deleteDogById = function(req, res, next) {
  sendJsonResponse(res, 200, successStatusJson);
};
