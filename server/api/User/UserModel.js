const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema({
	username : String,
	password : String,
	routines : Array
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', UserSchema);
