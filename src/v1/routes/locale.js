'use strict';

const Locale = require('../models/locale');

module.exports = {
  index: async (req, res) => {
    try {
      const data = await Locale.all();
      return res.status(200).json(data.rows);
    } catch (error) {
      return res.status(500).json({'msg': error.toString()});
    }
  },
  show: async (req, res) => {
    try {
      const data = await Locale.findById(req.params.id);
      if (data.rowCount === 0) {
        return res.sendStatus(400);
      }
      return res.status(200).json(data.rows[0]);
    } catch (error) {
      return res.status(500).json({'msg': error.toString()});
    }
  },
  create: async (req, res) => {
    try {
      const data = await Locale.create(req.body.locale);
      return res.status(201).json(data.rows[0]);
    } catch (error) {
      return res.status(500).json({'msg': error.toString()});
    }
  }
};
