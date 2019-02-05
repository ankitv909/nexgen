const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const UserSchema = mongoose.Schema({
  user_email: {type: String, unique: true, required: true, trim: true},
  user_password: {type: String, required: true,},
  user_name: {type: String, required: true, trim: true},
  user_gender: {type: String, },
  user_phone: {type: String, unique: true, required: true, trim: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);