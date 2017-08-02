var ExerciseModel = require('./ExerciseModel.js');

module.exports = {
  list: function (req, res) {
    ExerciseModel.find(function (err, Exercises) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Exercise.',
          error: err
        });
      }
      return res.json(Exercises);
    });
  },

  show: function (req, res) {
    var id = req.params.id;
    ExerciseModel.findOne({_id: id}, function (err, Exercise) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Exercise.',
          error: err
        });
      }
      if (!Exercise) {
        return res.status(404).json({
          message: 'No such Exercise'
        });
      }
      return res.json(Exercise);
    });
  },

  create: function (req, res) {
    var Exercise = new ExerciseModel({
      userID : req.body.userID,
      name : req.body.name,
      muscleGroup : req.body.muscleGroup,
      series : req.body.series
    });
    Exercise.save(function (err, Exercise) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Exercise',
          error: err
        });
      }
      return res.status(201).json(Exercise);
    });
  },
  
  update: function (req, res) {
    var id = req.params.id;
    ExerciseModel.findOne({_id: id}, function (err, Exercise) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Exercise',
          error: err
        });
      }
      if (!Exercise) {
        return res.status(404).json({
          message: 'No such Exercise'
        });
      }

      Exercise.userID = req.body.userID ? req.body.userID : Exercise.userID;
      Exercise.name = req.body.name ? req.body.name : Exercise.name;
      Exercise.muscleGroup = req.body.muscleGroup ? req.body.muscleGroup : Exercise.muscleGroup;
      Exercise.series = req.body.series ? req.body.series : Exercise.series;
      
      Exercise.save(function (err, Exercise) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Exercise.',
            error: err
          });
        }

        return res.json(Exercise);
      });
    });
  },

  remove: function (req, res) {
    var id = req.params.id;
    ExerciseModel.findByIdAndRemove(id, function (err, Exercise) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Exercise.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
