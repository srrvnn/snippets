/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var request = require('request');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  app.route('/cloud-message')
    .post(function(req, res) {

      var options = {

        method: 'POST',
        url: 'https://gcm-http.googleapis.com/gcm/send',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'key=AIzaSyBW988Qxc6HOLPZxTMnddN2Jh1KK3BkNhg'
        },
        json: true,
        body: {
          "to": "/topics/global",
          "data": {
            "message": "This is a GCM Topic Message, from Suraksha!"
           }
        }
      }

      request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.json(body);
        } else if (error) {
          res.send('error ' + error);
        } else if (response && response.statusCode != 200) {
          res.send('statusCode ' + response.statusCode);
        }
      })
    });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
