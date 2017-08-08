var ExerciseRoutineModel = require('./ExerciseRoutineModel.js');
module.exports = {
  list: function (req, res) {
    ExerciseRoutineModel.find({routineID: routineID}, function (err, ExerciseRoutines) {
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
    ExerciseRoutineModel.find({routineID: id}, function (err, ExerciseRoutines) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting ExerciseRoutine.',
          error: err
        });
      }
      console.log(ExerciseRoutines)
      return res.json(ExerciseRoutines);
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
    var id = req.body.id;
    var series = req.body.series;
    ExerciseRoutineModel.update({_id: id}, {$push: {series:series}}, function (err, ExerciseRoutine) {
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
      return res.json(ExerciseRoutine);
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
  },
  removeSeries: function (req, res) {
    console.log(req.body.relationID, req.body.series)
    ExerciseRoutineModel.update({_id: req.body.relationID}, {$set: {series: req.body.series}}, function (err, response) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the ExerciseRoutine.',
          error: err
        });
      }
      console.log(response)
      return res.status(204).json(response);
    });
  }
};
