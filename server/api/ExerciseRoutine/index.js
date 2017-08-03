var express = require('express');
var router = express.Router();
var ExerciseRoutineController = require('./ExerciseRoutineController.js');

/*
 * GET
 */
router.get('/', ExerciseRoutineController.list);

/*
 * GET
 */
router.get('/:id', ExerciseRoutineController.show);

/*
 * POST
 */
router.post('/', ExerciseRoutineController.create);

/*
 * PUT
 */
router.put('/:id', ExerciseRoutineController.update);

/*
 * DELETE
 */
router.delete('/:id', ExerciseRoutineController.remove);

module.exports = router;
