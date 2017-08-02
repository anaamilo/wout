const path = require('path');

module.exports = function(app) {
  app.use('/api/exercise', require('../api/Exercise/'));
  app.use('/api/routine', require('../api/Routine/'));
  app.use('/api/', require('../api/Auth/'));
  app.use('/api/', require('../api/User/'));

  app.all('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
};
