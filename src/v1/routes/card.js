'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();
const Card = require('../models/card');
const langUtil = require('../../utils/locale-parse');
const validate = require('../schemas');
const cardSchema = require('../schemas/card');

router.get('/cards', async (req, res) => {
  try {
    const data = await Card.all();
    return res.status(200).json(data.rows);
  } catch (error) {
    return res.status(500).json({'msg': error.toString()});
  }
});

router.get('/cards/:slug', async (req, res) => {
  try {
    const {slug} = req.params;
    let [cardId, locale] = slug.split('-');
    locale = locale.replace('_', '-');

    const data = await Card.findByIdAndLocale(cardId, locale);
    if (data.rowCount === 0) {
      return res.sendStatus(404);
    }
    return res.status(200).json(data.rows);
  } catch (error) {
    return res.status(500).json({'msg': error.toString()});
  }
});

router.post('/cards/:slug', validate(cardSchema), async (req, res) => {
  try {
    const {slug} = req.params;
    let [cardId, locale] = slug.split('-');
    locale = locale.replace('_', '-');

    const {question, answer} = req.body;
    const data = await Card.create(cardId, locale, question, answer);
    return res.status(201).json(data.rows[0]);
  } catch (error) {
    return res.status(500).json({'msg': error.toString()});
  }
});

// router.post('/cards/locale/:localeId', validate(cardSchema), async (req, res) => {
//   try {
//     const {localeId} = req.params;
//     const {question, answer} = req.body;
//     const data = await Card.create(localeId, question, answer);
//     return res.status(201).json(data.rows[0]);
//   } catch (error) {
//     return res.status(500).json({'msg': error.toString()});
//   }
// });

// router.post('/cards/:id/locale/:localeId', validate(cardSchema), async (req, res) => {
//   try {
//     const {id, localeId} = req.params;
//     const {question, answer} = req.body;
//     const data = await Card.createLocalizedCard(id, localeId, question, answer);
//     return res.status(201).json(data.rows[0]);
//   } catch (error) {
//     return res.status(500).json({'msg': error.toString()});
//   }
// });

module.exports = router;
