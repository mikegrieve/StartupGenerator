'use strict';

var validator = require('validator'),
  path = require('path'),
  config = require(path.resolve('./config/config'));

/**
 * Render the main application page
 */
exports.renderIndex = function (req, res) {

  var unicorns = ["Uber","Airbnb","Pinterest","Dropbox","Snapchat","Tinder","Yelp","Kik","YouTube","Twitter","PornHub" ];
  var nouns = ["Albinos", "Wizards", "Assholes", "Alcoholics","Old People", "Mutes", "Nerds","Racists","Pedophiles","Goths", "Girls", "Politicians", "Blondes", "Teens", "Anorexic People"];
  var icons = ["fa-user-circle-o", "fa-ravelry", "fa-telegram", "fa-wpexplorer", "fa-binoculars", "fa-book", "fa-camera-retro", "fa-bug", "fa-certificate", "fa-clone", "fa-cubes", "fa-hand-pointer-o", "fa-handshake-o", "fa-heart-o", "fa-credit-card", "fa-btc", "fa-align-justify", "fa-arrow-circle-right", "fa-gg"];
  var uRand = Math.floor(Math.random() * unicorns.length);
  var nRand = Math.floor(Math.random() * nouns.length);
  var iRand = Math.floor(Math.random() * icons.length);

  res.render("modules/core/server/views/hello", { unicorn: unicorns[uRand], noun: nouns[nRand], icon: icons[iRand]  } );

};

/**
 * Render the server error page
 */
exports.renderServerError = function (req, res) {
  res.status(500).render('modules/core/server/views/500', {
    error: 'Oops! Something went wrong...'
  });
};

/**
 * Render the server not found responses
 * Performs content-negotiation on the Accept HTTP header
 */
exports.renderNotFound = function (req, res) {

  res.status(404).format({
    'text/html': function () {
      res.render('modules/core/server/views/404', {
        url: req.originalUrl
      });
    },
    'application/json': function () {
      res.json({
        error: 'Path not found'
      });
    },
    'default': function () {
      res.send('Path not found');
    }
  });
};
