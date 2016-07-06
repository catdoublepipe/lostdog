module.exports.lostDogList = function(req, res, next) {
  res.render('lost-dog-list', {
    title: 'fetch'
  });
};

module.exports.dogInfo = function(req, res, next) {
  res.render('lost-dog-info', {
    title: 'The dog info page'
  });
};

module.exports.registerLostDog = function(req, res, next) {
  res.render('index', {
    title: 'Register a lost dog page'
  });
};

module.exports.foundLostDog = function(req, res, next) {
  res.render('index', {
    title: 'Found a lost dog page'
  });
};
