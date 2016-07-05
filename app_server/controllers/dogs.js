module.exports.homePage = function(req, res, next) {
  res.render('index', {
    title: 'The list of all registered lost dogs page'
  });
};

module.exports.dogInfo = function(req, res, next) {
  res.render('index', {
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
