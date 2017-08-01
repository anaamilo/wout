var express = require('express');
var router = express.Router();
var RoutineController = require('./RoutineController.js');

router.get('/', RoutineController.list);
router.get('/:id', RoutineController.show);
router.post('/', RoutineController.create);
router.put('/:id', RoutineController.update);
router.delete('/:id', RoutineController.remove);

module.exports = router;
