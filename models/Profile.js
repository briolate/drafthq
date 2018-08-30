const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const uniqueValidator = require('mongoose-unique-validator');

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  seasons: {
    type: String
  },
  playoffs: {
    type: String
  },
  championships: {
    type: String
  },
  lastplace: {
    type: String
  }
});

// ProfileSchema.plugin(uniqueValidator);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
