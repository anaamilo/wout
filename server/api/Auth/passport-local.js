const LocalStrategy = require('passport-local').Strategy;
const User          = require('../User/UserModel');
const bcrypt        = require('bcrypt');

module.exports = function (passport) {
  passport.use('local', new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, user) => {
      if (err) { return next(err); }

      if (!user) {
        next(null, false, { message: 'Incorrect username' });
        return;
      }

      if (!bcrypt.compareSync(password, user.password)) {
        next(null, false, { message: 'Incorrect password' });
        return;
      }

      next(null, user);
    });
  }));

};
