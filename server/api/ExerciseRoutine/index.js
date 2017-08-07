var express = require('express');
var router = express.Router();
var ExerciseRoutineController = require('./ExerciseRoutineController.js');

router.get('/', ExerciseRoutineController.list);
router.get('/:id', ExerciseRoutineController.show);
router.post('/', ExerciseRoutineController.create);
router.delete('/:id', ExerciseRoutineController.remove);
router.post('/pushseries', ExerciseRoutineController.update);

module.exports = router;
