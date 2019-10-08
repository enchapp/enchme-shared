const validator = require('is-my-json-valid');

const schema = require('../schemes/last');

const metaValidate = validator(schema, {
  verbose: true,
});

const acceptedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._".split('');

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
const validUsername = username => {
  if (!username) return false;
  if (typeof username !== 'string') return false;
  if (username.length <4 || username.length > 32) return false;

  const chartsOk = username.split('').reduce((res, char) => {
    if (!res) return res;
    return (acceptedChars.indexOf(char) !== -1);
  }, true);

  if (!chartsOk) return false;

  return true;
}

module.exports.validateScheme = validateScheme;
module.exports.validUsername = validUsername;
