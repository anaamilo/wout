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
    RoutineModel.findOne({_id: id})
      .exec()
      .then(Routine => {
        console.log(JSON.stringify(Routine._id))
        if (!Routine) { return res.status(404).json({message: 'No such Routine' });}
        ExerciseRoutineModel.find({routineID: "598211c43be4b1016e898efc"}).populate('exerciseID').exec().then(Exercises => {
          return res.json({Routine: Routine, Exercises: Exercises});
        })
      })
    // ExerciseRoutineModel.find().populate('routineID').populate('exerciseID').exec().then(all => {
    //       return res.json(all);
    //     })
      .catch(e => res.status(500).json({
        message: 'Error when creating Routine',
        error: err
      }));
  },
  create: function (req, res) {
    var Routine = new RoutineModel({
      userID : req.body.userID,
      name : req.body.name
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

      Routine.userID = req.body.userID ? req.body.userID : Routine.userID;
      Routine.name = req.body.name ? req.body.name : Routine.name;

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
