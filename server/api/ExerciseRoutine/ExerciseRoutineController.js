var ExerciseRoutineModel = require('./ExerciseRoutineModel.js');
module.exports = {
  list: function (req, res) {
    ExerciseRoutineModel.find(function (err, ExerciseRoutines) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting ExerciseRoutine.',
          error: err
        });
      }
      return res.json(ExerciseRoutines);
    });
  },
  show: function (req, res) {
    var id = req.params.id;
    ExerciseRoutineModel.findOne({_id: id}, function (err, ExerciseRoutine) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting ExerciseRoutine.',
          error: err
        });
      }
      if (!ExerciseRoutine) {
        return res.status(404).json({
          message: 'No such ExerciseRoutine'
        });
      }
      return res.json(ExerciseRoutine);
    });
  },
  create: function (req, res) {
    let wadus = req.body.exercises.map(e => {
      var ExerciseRoutine = new ExerciseRoutineModel({
        exerciseID : e,
        routineID : req.body.routineID
      });

      return ExerciseRoutine.save(function (err, ExerciseRoutine) {
        if (err) {
          return res.status(500).json({
            message: 'Error when creating ExerciseRoutine',
            error: err
          });
        }
        console.log(ExerciseRoutine);
      });
    })
    Promise.all(wadus).then(e => {res.status(201).json('')});
  },
  update: function (req, res) {
    var id = req.params.id;
    ExerciseRoutineModel.findOne({_id: id}, function (err, ExerciseRoutine) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting ExerciseRoutine',
          error: err
        });
      }
      if (!ExerciseRoutine) {
        return res.status(404).json({
          message: 'No such ExerciseRoutine'
        });
      }

      ExerciseRoutine.exerciseID = req.body.exerciseID ? req.body.exerciseID : ExerciseRoutine.exerciseID;
      ExerciseRoutine.routineID = req.body.routineID ? req.body.routineID : ExerciseRoutine.routineID;

      ExerciseRoutine.save(function (err, ExerciseRoutine) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating ExerciseRoutine.',
            error: err
          });
        }

        return res.json(ExerciseRoutine);
      });
    });
  },
  remove: function (req, res) {
    var id = req.params.id;
    ExerciseRoutineModel.findByIdAndRemove(id, function (err, ExerciseRoutine) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the ExerciseRoutine.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
