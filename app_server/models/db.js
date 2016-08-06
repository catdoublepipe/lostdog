const mongoose = require('mongoose');
const dogSchema = require('./schemata/dogSchema')

/*
 * Create mongoose connection
 */
const dbUri = process.env.MONGODB_URI;
mongoose.connect(dbUri);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbUri);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

/*
 * Create mongoose model
 */
mongoose.model('Dog', dogSchema, 'dog');

/*
 * Graceful shutdown
 */
let gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnnected through ' + msg);
    callback();
  });
};

// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// For app termination
process.on('SIGNIT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});

// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function() {
    process.exit(0);
  });
});
