/* eslint-disable new-cap */
'use strict';

const router = require('express').Router();
const validate = require('../schemas');
const localeSchema = require('../schemas/locale');
const Locale = require('./locale');
const Card = require('./card');
const localizedCard = require('./localized_card');

router
    .get('/locales', Locale.index)
    .get('/locales/:id', Locale.show)
    .post('/locales', validate(localeSchema), Locale.create);

router
    .get('/cards', Card.index)
    .get('/cards/:id', Card.show)
    .post('/cards', Card.create);

router
    .get('/cards/:cardId/localized_cards/:localeId', localizedCard.show)
    .post('/cards/:cardId/localized_cards', localizedCard.create);

module.exports = router;
