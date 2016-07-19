module.exports.logIn = function(req, res, next) {
  res.render('index', {
    title: 'The login page'
  });
};

module.exports.signUp = function(req, res, next) {
  res.render('index', {
    title: 'The sign-up page'
  });
};
