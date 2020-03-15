const validator = require('is-my-json-valid');

const basicPageSchema = require('../schemes/basicPage');

const pageSchema = require('../schemes/page');
const buttonSchema = require('../schemes/button');
const dividerSchema = require('../schemes/divider');
const embedSchema = require('../schemes/embed');
const formSchema = require('../schemes/form');
const formbuttonSchema = require('../schemes/form.button');
const forminputSchema = require('../schemes/form.input');
const formtextSchema = require('../schemes/form.text');
const headerSchema = require('../schemes/header');
const imageSchema = require('../schemes/image');
const profileSchema = require('../schemes/profile');
const socialSchema = require('../schemes/social');
const textSchema = require('../schemes/text');
const videoSchema = require('../schemes/video');

const basicPageValidator = validator(basicPageSchema, {
  verbose: true,
});

const pageValidator = validator(pageSchema, {
  verbose: true,
});

const componentValidators = {
  button: validator(buttonSchema, { verbose: true }),
  divider: validator(dividerSchema, { verbose: true }),
  embed: validator(embedSchema, { verbose: true }),
  form: validator(formSchema, { verbose: true }),
  'form.button': validator(formbuttonSchema, { verbose: true }),
  'form.input': validator(forminputSchema, { verbose: true }),
  'form.text': validator(formtextSchema, { verbose: true }),
  header: validator(headerSchema, { verbose: true }),
  image: validator(imageSchema, { verbose: true }),
  profile: validator(profileSchema, { verbose: true }),
  social: validator(socialSchema, { verbose: true }),
  text: validator(textSchema, { verbose: true }),
  video: validator(videoSchema, { verbose: true }),
};

const acceptedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._1234567890".split('');

/**
 * Validate page scheme
 * @param {Object} input scheme
 *
 * @returns {Object} result
 * @returns {Boolean} result.success
 * @returns {Object[]} errors [{ field: "", message: "", value: "", type: "", schemaPath: [] }]
 */
const validateScheme = (input, deep = false) => {
  if (!deep) {
    const basicPageResult = basicPageValidator(input);
    if (!basicPageResult) {
      return {
        success: false,
        errors: basicPageValidator.errors
      };
    }
    return {
      success: true,
      errors: [],
    }
  }

  const pageResult = pageValidator(input);
  if (!pageResult) {
    return {
      success: false,
      errors: pageValidator.errors
    };
  }

  const componentErrors = input.components.reduce((errs, component, i) => {
    // basic: id, type
    if (!component.type) {
      errs.push({
        field: `data.components[${i}]`,
        message: 'type is required',
        value: 'type',
        type: 'string',
      });
      return errs;
    }

    const componentValidator = componentValidators[component.type];
    // do we support this type of component
    if (!componentValidator) {
      errs.push({
        field: `data.components.${i}`,
        message: 'type is unsupproted',
        value: component.type,
        type: 'string',
      });
      return errs;
    }

    const componentResult = componentValidator(component);
    if (!componentResult) {
      return errs.concat(componentValidator.errors.map((e) => {
        e.value = component.type;
        return e;
      }));
    }

    if (component.type === 'form') {
      component.components.forEach((subComponent, j) => {
        // basic: type
        if (!subComponent.type) {
          errs.push({
            field: `data.components.${i}.components.${j}`,
            message: 'type is required',
            value: 'type',
            type: 'string',
          });
          return errs;
        }
    
        const subComponentValidator = componentValidators[`form.${subComponent.type}`];
        // do we support this type of component
        if (!subComponentValidator) {
          errs.push({
            field: `data.components.${i}.components.${j}`,
            message: 'type is unsupproted',
            value: `form.${subComponent.type}`,
            type: 'string',
          });
          return errs;
        }
    
        const subComponentResult = subComponentValidator(subComponent);
        if (!subComponentResult) {
          return errs.concat(subComponentValidator.errors.map((e) => {
            e.value = `form.${subComponent.type}`;
            return e;
          }));
        }
    
        return errs;
      });
    }

    return errs;
  }, []);

  if (componentErrors.length) {
    return {
      success: false,
      errors: componentErrors,
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
