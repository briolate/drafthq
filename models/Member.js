const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const uniqueValidator = require('mongoose-unique-validator');

// Create Schema
const MemberSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  seasons: [
    {
      year: {
        type: Number,
        required: true
        // unique: true
      },
      qb: {
        type: Number
      },
      rb1: {
        type: Number
      },
      rb2: {
        type: Number
      },
      wr1: {
        type: Number
      },
      wr2: {
        type: Number
      },
      te: {
        type: Number
      },
      dst: {
        type: Number
      },
      k: {
        type: Number
      }
    }
  ]
});

// MemberSchema.plugin(uniqueValidator);

module.exports = Member = mongoose.model('member', MemberSchema);
