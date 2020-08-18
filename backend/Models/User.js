const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  hasSubscription: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Users', UserSchema);
