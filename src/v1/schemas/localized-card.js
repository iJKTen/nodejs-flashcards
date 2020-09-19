'use strict';

const Joi = require('joi');

const LocalizedCard = Joi.object().keys({
  locale_id: Joi.number().required(),
  question: Joi.string().required(),
  answer: Joi.string().required()
});

module.exports = LocalizedCard;
