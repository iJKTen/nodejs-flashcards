'use strict';

const Card = require('../models/card');

module.exports = {
  index: async (req, res) => {
    try {
      const data = await Card.all();
      return res.status(200).json(data.rows);
    } catch (error) {
      return res.status(500).json({'msg': error.toString()});
    }
  },
  show: async (req, res) => {
    try {
      const data = await Card.findById(req.params.id);
      if (data.rowCount === 0) {
        return res.sendStatus(404);
      }
      return res.status(200).json(data.rows);
    } catch (error) {
      return res.status(500).json({'msg': error.toString()});
    }
  },
  create: async (req, res) => {
    try {
      const data = await Card.create();
      return res.status(201).json(data.rows[0]);
    } catch (error) {
      return res.status(500).json({'msg': error.toString()});
    }
  }
};
