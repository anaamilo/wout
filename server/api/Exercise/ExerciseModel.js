var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ExerciseSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: 'User', required: true},
	name: String,
  muscleGroup: {
    type: String,
    enum: [
    'abdominals', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats', 'lower back', 'middle back', 'quadriceps', 'shoulders', 'traps', 'triceps'
    ],
    required: true
  },
	series: Array
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
