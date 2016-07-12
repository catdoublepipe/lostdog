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
    title: 'fetch - Growlie information',
    pageHeader: {
      title: 'Growlie',
      strapline: 'last seen 6.31km away'
    },
    dogInfo: {
      age: 5,
      breed: 'Fire-type',
      dogDescription: 'A level-13 pokémon very loyal to his trainer, Growlie will bark fiercely at anything invading our territory. Growlie has a superb sense of smell. Once he smells anything, he won’t forget the scent, no matter what! He can even use his advanced olfactory sense to determine the emotions of other living things.',
      lastSeenDate: '4th July 2016',
      lastSeenLocation: 'Cinnabar Island, Kanto region',
      name: 'Growlie',
      tags: ['Friendly', 'Loyal']
    },
    comments: [{
      author: 'Gary Oak',
      timestamp: '16th July 2016 10:12:39',
      comment: 'I saw one just like this so I caught it with a pokeball. He has since evolved to an Arcanine!'
    }, {
      author: 'Officer Jenny',
      timestamp: '20th July 2016 14:59:51',
      comment: 'How dare Team Rocket take an Officer Jenny\'s Growlithe! We will get them for this!'
    }]
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
