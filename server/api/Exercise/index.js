var express = require('express');
var router = express.Router();
var ExerciseController = require('./ExerciseController.js');

router.get('/', ExerciseController.list);
router.get('/:id', ExerciseController.get);
router.post('/', ExerciseController.create);
router.put('/:id', ExerciseController.update);
router.delete('/:id', ExerciseController.remove);

module.exports = router;
