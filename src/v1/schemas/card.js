'use strict';

const Joi = require('joi');

const Card = Joi.object().keys({
  question: Joi.string().required(),
  answer: Joi.string().required()
});

module.exports = Card;
