var path = require('path');

module.exports = function(app) {
  app.use('/api/', require('../api/'));

  app.all('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
};
