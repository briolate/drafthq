const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateDraftsInput(data) {
  let errors = {};

  data.year = !isEmpty(data.year) ? data.year : '';
  data.qb = !isEmpty(data.qb) ? data.qb : '';
  data.rb1 = !isEmpty(data.rb1) ? data.rb1 : '';
  data.rb2 = !isEmpty(data.rb2) ? data.rb2 : '';
  data.rb3 = !isEmpty(data.rb3) ? data.rb3 : '';
  data.wr1 = !isEmpty(data.wr1) ? data.wr1 : '';
  data.wr2 = !isEmpty(data.wr2) ? data.wr2 : '';
  data.wr3 = !isEmpty(data.wr3) ? data.wr3 : '';
  data.te = !isEmpty(data.te) ? data.te : '';
  data.dst = !isEmpty(data.dst) ? data.dst : '';
  data.k = !isEmpty(data.k) ? data.k : '';

  // if (!Validator.isLength(data, { min: 1, max: 16 })) {
  //   errors = 'Pick needs to be between 1 and 16 rounds';
  // }

  if (Validator.isEmpty(data.year)) {
    errors.year = 'Year is required';
  }

  if (Validator.isEmpty(data.qb)) {
    errors.qb = 'QB is required';
  }

  if (Validator.isEmpty(data.rb1)) {
    errors.rb1 = 'RB1 is required';
  }

  if (Validator.isEmpty(data.rb2)) {
    errors.rb2 = 'RB2 is required';
  }

  if (Validator.isEmpty(data.wr1)) {
    errors.wr1 = 'WR1 is required';
  }

  if (Validator.isEmpty(data.wr2)) {
    errors.wr2 = 'WR2 is required';
  }

  if (Validator.isEmpty(data.te)) {
    errors.te = 'TE is required';
  }

  if (Validator.isEmpty(data.dst)) {
    errors.dst = 'D/ST is required';
  }

  if (Validator.isEmpty(data.k)) {
    errors.k = 'K is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
