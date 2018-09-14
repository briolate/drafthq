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
  },
  drafts: [
    {
      year: {
        type: Number,
        required: true
        // unique: true
      },
      qb: {
        type: Number,
        required: true
      },
      rb1: {
        type: Number,
        required: true
      },
      rb2: {
        type: Number,
        required: true
      },
      rb3: {
        type: Number
      },
      wr1: {
        type: Number,
        required: true
      },
      wr2: {
        type: Number,
        required: true
      },
      wr3: {
        type: Number
      },
      te: {
        type: Number,
        required: true
      },
      dst: {
        type: Number,
        required: true
      },
      k: {
        type: Number,
        required: true
      }
    }
  ]
});

// ProfileSchema.plugin(uniqueValidator);

module.exports = Profile = mongoose.model('profile', ProfileSchema);
