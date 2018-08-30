const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const uniqueValidator = require('mongoose-unique-validator');

// Create Schema
const DraftSchema = new Schema({
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

// DraftSchema.plugin(uniqueValidator);

module.exports = Drafts = mongoose.model('drafts', DraftSchema);
