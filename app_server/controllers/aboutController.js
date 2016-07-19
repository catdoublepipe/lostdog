module.exports = function(req, res, next) {
  res.render('generic-text', {
    title: 'About us'
  });
};
