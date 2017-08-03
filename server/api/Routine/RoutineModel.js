var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var RoutineSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: 'User', required: true},
	name: String,
  exercises: Array
});

module.exports = mongoose.model('Routine', RoutineSchema);
