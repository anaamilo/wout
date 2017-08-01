var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var RoutineSchema = new Schema({
	'name' : String
});

module.exports = mongoose.model('Routine', RoutineSchema);
