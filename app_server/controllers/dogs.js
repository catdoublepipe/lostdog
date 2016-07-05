module.exports.homePage = function(req, res, next) {
  res.render('index', {
    title: 'List of all registered lost dogs'
  });
};

module.exports.dogInfo = function(req, res, next) {
  res.render('index', {
    title: 'Dog info page'
  });
};

module.exports.registerLostDog = function(req, res, next) {
  res.render('index', {
    title: 'Register lost dog page'
  });
};

module.exports.foundLostDog = function(req, res, next) {
  res.render('index', {
    title: 'Found lost dog page'
  });
};
