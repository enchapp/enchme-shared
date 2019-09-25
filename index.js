const validator = require('is-my-json-valid');

const schema = require('./schemes/last');

const metaValidate = validator(schema, {
  verbose: true,
});

/**
 * Validate page scheme
 * @param {Object} input scheme
 *
 * @returns {Object} result
 * @returns {Boolean} result.success
 * @returns {Object[]} errors [{ field: "", message: "", value: "", type: "", schemaPath: [] }]
 */
const validateScheme = (input) => {
  const res = metaValidate(input);
  if (!res) {
    return {
      success: false,
      errors: metaValidate.errors,
    };
  }
  return {
    success: true,
    errors: [],
  };
}

module.exports.validateScheme = validateScheme;
