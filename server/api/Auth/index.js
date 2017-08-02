const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const User = require('../User/UserModel');

const authRoutes = express.Router();

function returnMessage(message){
  return (req,res,next) => res.status(500).json({error:true, message:message});
}
authRoutes.get('/signup',returnMessage("This should be a POST"));
authRoutes.post('/signup', (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      message: 'Provide username and password'
    });
    return;
  }

  User.findOne({
    username
  }, '_id').exec().then(foundUser => {
    if (foundUser) {
      res.status(400).json({
        message: 'The username already exists'
      });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({
      username,
      password: hashPass
    }).save().then(user => {
      req.login(user, (err) => {
        if (err) {
          res.status(500).json({
            message: 'Something went wrong'
          });
          return;
        }
        res.status(200).json(req.user);
      });
    }).catch(e => res.status(400).json({
      message: 'Something went wrong'
    }));

  });
});

authRoutes.get('/login',returnMessage("This should be a POST"));
authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({
        message: 'Something went wrong'
      });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({
          message: 'Something went wrong'
        });
        return;
      }
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

function ensureLoginOrJsonError(error = "Unauthorized") {
  return (req, res, next) => req.isAuthenticated() ? next() : res.status(403).json({
    error: error
  });
}

authRoutes.get('/logout', ensureLoginOrJsonError("User is not logged in"), (req, res, next) => {
  req.logout();
  res.status(200).json({
    message: 'Success'
  });
});

authRoutes.get('/loggedin', ensureLoginOrJsonError(), (req, res, next) => {
  return res.status(200).json(req.user);
});

authRoutes.get('/private', ensureLoginOrJsonError(), (req, res, next) => {
  return res.json({
    message: 'This is a private message'
  });
});

module.exports = authRoutes;
