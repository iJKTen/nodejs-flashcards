'use strict';

const language = require('./locale');
const card = require('./card');
const localizedCard = require('./localized_card');

module.exports = [
  card,
  language,
  localizedCard
];
