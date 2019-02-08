const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 4;

const UserSchema = mongoose.Schema({
  user_email: {type: String, unique: true, required: true, trim: true},
  user_password: {type: String, required: true,default: ''},
  user_name: {type: String, required: true, trim: true},
  user_gender: {type: String, },
  user_phone: {type: String, unique: true, required: true, trim: true}
},
    {
  timestamps: true
},);
UserSchema
    .virtual('password')
    // set methods
    .set(function (user_password) {
      this.user_password = user_password;
    });

UserSchema.pre("save", function (next) {
  // store reference
  const user = this;
  if (user.user_password === undefined) {
    return next();
  }
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) console.log(err);
    // hash the password using our new salt
    bcrypt.hash(user.user_password, salt, function (err, hash) {
      if (err) console.log(err);
      user.user_password = hash;
      next();
    });
  });
});

/**
 * Methods
 */
UserSchema.methods = {
  comparePassword: function(user_password, cb) {
    bcrypt.compare(user_password, this.user_password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  }
}


module.exports = mongoose.model('User', UserSchema);