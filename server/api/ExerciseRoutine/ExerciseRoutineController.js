var ExerciseRoutineModel = require('./ExerciseRoutineModel.js');

/**
 * ExerciseRoutineController.js
 *
 * @description :: Server-side logic for managing ExerciseRoutines.
 */
module.exports = {

    /**
     * ExerciseRoutineController.list()
     */
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

    /**
     * ExerciseRoutineController.show()
     */
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

    /**
     * ExerciseRoutineController.create()
     */
    create: function (req, res) {
        var ExerciseRoutine = new ExerciseRoutineModel({
			exerciseID : req.body.exerciseID,
			routineID : req.body.routineID

        });

        ExerciseRoutine.save(function (err, ExerciseRoutine) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating ExerciseRoutine',
                    error: err
                });
            }
            return res.status(201).json(ExerciseRoutine);
        });
    },

    /**
     * ExerciseRoutineController.update()
     */
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

    /**
     * ExerciseRoutineController.remove()
     */
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
