'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();
const Locale = require('../models/locale');
const validate = require('../schemas');
const localeSchema = require('../schemas/locale');

router.get('/locales', async (req, res, next) => {
  try {
    const data = await Locale.all();
    return res.status(200).json(data.rows);
  } catch (error) {
    return res.status(500).json({'msg': error.toString()});
  }
});

router.get('/locales/:id', async (req, res) => {
  try {
    const data = await Locale.findById(req.params.id);
    if (data.rowCount === 0) {
      return res.sendStatus(400);
    }
    return res.status(200).json(data.rows[0]);
  } catch (error) {
    return res.status(500).json({'msg': error.toString()});
  }
});

router.post('/locales', validate(localeSchema), async (req, res) => {
  try {
    const data = await Locale.create(req.body.locale);
    return res.status(201).json(data.rows[0]);
  } catch (error) {
    return res.status(500).json({'msg': error.toString()});
  }
});

module.exports = router;
