var RoutineModel = require('./RoutineModel.js');

/**
 * RoutineController.js
 *
 * @description :: Server-side logic for managing Routines.
 */
module.exports = {

    /**
     * RoutineController.list()
     */
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

    /**
     * RoutineController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        RoutineModel.findOne({_id: id}, function (err, Routine) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Routine.',
                    error: err
                });
            }
            if (!Routine) {
                return res.status(404).json({
                    message: 'No such Routine'
                });
            }
            return res.json(Routine);
        });
    },

    /**
     * RoutineController.create()
     */
    create: function (req, res) {
        var Routine = new RoutineModel({
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

    /**
     * RoutineController.update()
     */
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

    /**
     * RoutineController.remove()
     */
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
