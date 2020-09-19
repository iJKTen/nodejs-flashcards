'use strict';

// eslint-disable-next-line new-cap
const router = require('express').Router();
const Card = require('../models/card');

router.get('/cards', async (req, res) => {
  try {
    const data = await Card.all();
    return res.status(200).json(data.rows);
  } catch (error) {
    return res.status(500).json({'msg': error.toString()});
  }
});

router.get('/cards/:id', async (req, res) => {
  try {
    const data = await Card.findById(req.params.id);
    if (data.rowCount === 0) {
      return res.sendStatus(404);
    }
    return res.status(200).json(data.rows);
  } catch (error) {
    return res.status(500).json({'msg': error.toString()});
  }
});

module.exports = router;
