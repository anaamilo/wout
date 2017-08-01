const express = require('express');
const router = express.Router();
const UserController = require('./UserController.js');

router.get('/', UserController.list);
router.get('/:id', UserController.show);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.remove);

module.exports = router;
