var RoutineModel = require('./RoutineModel.js');
var ExerciseModel = require('../Exercise/ExerciseModel.js');
var ExerciseRoutineModel = require('../ExerciseRoutine/ExerciseRoutineModel.js');

module.exports = {
  list: function (req, res) {
    RoutineModel.find(function (err, Routines) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Routine.',
          error: err
        });
      }
      return res.json(Routines);
    });
  },
  show: function (req, res) {
    var id = req.params.id;
    RoutineModel.findOne({_id : id}, (err, routine) => {
      ExerciseRoutineModel.find({routineID : routine._id}, {exerciseID: 1, _id: 0}, (err, routines) => {
        routinesPromises = []
        routines.forEach((e) => {
          routinesPromises.push(
            new Promise((resolve, reject) => {
              e.populate("exerciseID", (err, routine) => {
                resolve(routine)
              });   
            })
            )
        })
        Promise.all(routinesPromises).then(values => {
          res.status(200).json({
            routine: routine,
            exercises: values
          })
        })
      });
    });
  },
  create: function (req, res) {
    var Routine = new RoutineModel({
      userID : req.body.userID,
      name : req.body.name,
      exercises: req.body.exercises
   });

    Routine.save(function (err, Routine) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating Routine',
          error: err
        });
      }
      return res.status(201).json(Routine);
    });
  },
  update: function (req, res) {
    var id = req.params.id;
    RoutineModel.findOne({_id: id}, function (err, Routine) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting Routine',
          error: err
        });
      }
      if (!Routine) {
        return res.status(404).json({
          message: 'No such Routine'
        });
      }

      Routine.name = req.body.name ? req.body.name : Routine.name;
      Routine.exercises = req.body.exercises ? req.body.exercises : Routine.exercises;

      Routine.save(function (err, Routine) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating Routine.',
            error: err
          });
        }

        return res.json(Routine);
      });
    });
  },
  remove: function (req, res) {
    var id = req.params.id;
    RoutineModel.findByIdAndRemove(id, function (err, Routine) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the Routine.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
