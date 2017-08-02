var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ExerciseRoutineSchema = new Schema({
	'exerciseID' : { type: Schema.Types.ObjectId, ref: 'Exercise', required: true},
	'routineID' : { type: Schema.Types.ObjectId, ref: 'Routine', required: true}
});

module.exports = mongoose.model('ExerciseRoutine', ExerciseRoutineSchema);
