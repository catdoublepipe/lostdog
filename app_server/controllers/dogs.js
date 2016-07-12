module.exports.lostDogList = function(req, res, next) {
  res.render('lost-dog-list', {
    title: 'fetch - find lost dogs near you',
    pageHeader: {
      title: 'fetch',
      strapline: 'Helping find lost dogs near you.'
    },
    dogs: [{
      name:'Fido',
      lastSeenDate: '30th June 2016',
      lastSeenDistance: '931m',
      image: '/images/chow-chow.jpg',
      summaryText: 'Last seen near Glasgow\'s George Square, Fido is a friendly, fluffy, four year-old chow-chow who loves to play fetch.',
      tags: ['Aggressive!']
    }, {
      name:'Growlie',
      lastSeenDate: '4th July 2016',
      lastSeenDistance: '6.31km',
      image: '/images/growlie1.jpg',
      summaryText: 'Last seen on Cinnabar Island, Growlie is a friendly and loyal level-13 fire Pokémon who was ruthlessly taken from his Trainer by the evil Team Rocket.',
      tags: ['Friendly', 'Loyal']
    }]
  });
};

module.exports.dogInfo = function(req, res, next) {
  res.render('lost-dog-info', {
    title: 'Growlie'
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
