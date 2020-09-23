/* eslint-disable new-cap */
'use strict';

const router = require('express').Router();
const validate = require('../schemas');
const localeSchema = require('../schemas/locale');
const language = require('./locale');
const card = require('./card');
const localizedCard = require('./localized_card');

router
    .get('/locales', language.index)
    .get('/locales/:id', language.show)
    .post('/locales', validate(localeSchema), language.create)

    .get('/cards', card.index)
    .get('/cards/:id', card.show)
    .post('/cards', card.create)

    .get('/cards/:cardId/localized_cards/:localeId', localizedCard.show)
    .post('/cards/:cardId/localized_cards', localizedCard.create);

module.exports = router;
