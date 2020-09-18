'use strict';

const Joi = require('joi');
const LocaleCode = require('locale-code');

const Locale = Joi.object().keys({
  locale: Joi.string().required().custom((value, helper) => {
    if (!LocaleCode.validate(value)) {
      return helper.message(`locale code ${value} is not valid.`);
    }
    return true;
  })
});

module.exports = Locale;
