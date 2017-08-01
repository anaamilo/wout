var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ExerciseSchema = new Schema({
	'name' : String,
	'series' : Object
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
