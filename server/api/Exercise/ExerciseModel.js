var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ExerciseSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: 'User', required: true},
	name: String,
  muscleGroup: {
    type: String,
    enum: ['leg', 'shoulder', 'chest', 'abdominals', 'adductors'],
    required: true
  },
	series: Array
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
