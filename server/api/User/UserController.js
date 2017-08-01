var UserModel = require('./UserModel.js');

module.exports = {

  list: function (req, res) {
    UserModel.find(function (err, Users) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting User.',
          error: err
        });
      }
      return res.json(Users);
    });
  },

  show: function (req, res) {
    var id = req.params.id;
    UserModel.findOne({_id: id}, function (err, User) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting User.',
          error: err
        });
      }
      if (!User) {
        return res.status(404).json({ message: 'No such User'});
      }
      return res.json(User);
    });
  },

  create: function (req, res) {
    var User = new UserModel({
    	username : req.body.username,
    	password : req.body.password,
    	routines : req.body.routines
    });

    User.save(function (err, User) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating User',
          error: err
        });
      }
      return res.status(201).json(User);
    });
  },

  update: function (req, res) {
    var id = req.params.id;
    UserModel.findOne({_id: id}, function (err, User) {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting User',
            error: err
          });
        }
        if (!User) {
          return res.status(404).json({
            message: 'No such User'
          });
        }

        User.username = req.body.username ? req.body.username : User.username;
	      User.password = req.body.password ? req.body.password : User.password;
	      User.routines = req.body.routines ? req.body.routines : User.routines;
	
        User.save(function (err, User) {
          if (err) {
            return res.status(500).json({
              message: 'Error when updating User.',
              error: err
            });
          }
          return res.json(User);
        });
    });
  },

  remove: function (req, res) {
    var id = req.params.id;
    UserModel.findByIdAndRemove(id, function (err, User) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the User.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
