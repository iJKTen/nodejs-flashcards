/* eslint-disable new-cap */
'use strict';

const router = require('express').Router();
const card = require('../models/card');
const localizedCard = require('../models/localized_card');
const validate = require('../schemas');
const localizedCardSchema = require('../schemas/localized-card');

router.get('/cards/:cardId/locales/:localeId', async (req, res) => {
  try {
    const data = await localizedCard.all(req.params.cardId, req.params.localeId);
    if (data.rowCount === 0) {
      return res.sendStatus(404);
    }
    return res.status(200).json(data.rows[0]);
  } catch (error) {
    return res.status(500).json({'err': error.toString()});
  }
});

router.post('/cards/:cardId/locales', validate(localizedCardSchema), async (req, res) => {
  try {
    const {locale_id: localeId, question, answer} = req.body;
    const data = await localizedCard.create(req.params.cardId, localeId, question, answer);
    return res.status(201).json(data.rows[0]);
  } catch (error) {
    return res.status(500).json({'err': error.toString()});
  }
});

router.post('/cards', validate(localizedCardSchema), async (req, res) => {
  try {
    const newCard = await card.create();
    const {locale_id: localeId, question, answer} = req.body;
    const data = await localizedCard.create(newCard.rows[0].id, localeId, question, answer);
    return res.status(201).json(data.rows[0]);
  } catch (error) {
    return res.status(500).json({'msg': error.toString()});
  }
});

module.exports = router;
