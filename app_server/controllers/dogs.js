module.exports.homePage = function(req, res, next) {
  res.render('index', {
    title: 'Lost dog list'
  });
};

module.exports.dogInfo = function(req, res, next) {
  res.render('index', {
    title: 'Dog info page'
  });
};

module.exports.add = function(req, res, next) {
  res.render('index', {
    title: 'Add dog page'
  });
};
