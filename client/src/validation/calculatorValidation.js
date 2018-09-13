import Validator from 'validator';
import isEmpty from './is-empty';

const validateFeaturesInput = data => {
  let errors = {};

  data.adp = !isEmpty(data.adp) ? data.adp : '';
  data.picklost = !isEmpty(data.picklost) ? data.picklost : '';

  if (!Validator.isLength(data.adp, { min: 1, max: 224 })) {
    errors.handle = 'ADP must be be between 1 and 224';
  }

  if (Validator.isEmpty(data.adp)) {
    errors.handle = 'ADP is required for calculation';
  }

  if (!Validator.isLength(data.picklost, { min: 1, max: 224 })) {
    errors.handle = 'Pick Lost must be be between 1 and 224';
  }

  if (Validator.isEmpty(data.picklost)) {
    errors.handle = 'Pick Lost is required for calculation';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateFeaturesInput;
