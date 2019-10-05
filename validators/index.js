const validator = require('is-my-json-valid');

const schema = require('../schemes/last');

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

/**
 * Validate username
 *
 * @param {String} username
 * @returns {Boolean}
 */
// const validUsername = username => /^(?=.{4,32}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(username);
const validUsername = username => new RegExp(`^(?=.{4,32}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$`).test(username);


module.exports.validateScheme = validateScheme;
module.exports.validUsername = validUsername;
