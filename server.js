
/**
 * Module dependencies.
 */

var config = require('./config');
var debug = require('debug')('server');
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
var DEV = !process.env.PRODUCTION;
var HOST = config.server.host;
var PORT = config.server.port;

var app = module.exports = express();

/**
 * Configure view rendering.
 */

app.set('views', './views');
app.set('view engine', 'jade');

/**
 * Enable logging in dev environment
 */

if (DEV) {
  debug('development logging enabled');
  app.use(morgan('dev'));
}

// app.use(cookieParser(COOKIE_SIGNATURE));

// app.use(bodyParser());

/**
 * Specify static, public assets.
 */

app.use('/img', express.static(__dirname + '/img'));
app.use('/build', express.static(__dirname + '/build'));

/**
 * Mount routes.
 */

app.use(require('./routes/home'));

/**
 * Start server.
 */

if (!module.parent) {
  app.listen(PORT, function () {
    console.log();
    console.log('  tabrevival running');
    console.log('  listening on port %d', PORT);
    console.log();

    mongoose.connect(HOST, 'tab-revival', function () {
      debug('connected???');
    });

  });
}
