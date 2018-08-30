const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.seasons = !isEmpty(data.seasons) ? data.seasons : '';
  data.playoffs = !isEmpty(data.playoffs) ? data.playoffs : '';
  data.championships = !isEmpty(data.championships) ? data.championships : '';
  data.lastplace = !isEmpty(data.lastplace) ? data.lastplace : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle needs to be more than 2 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
