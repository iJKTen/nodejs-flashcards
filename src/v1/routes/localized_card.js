'use strict';

const localizedCard = require('../data-access/localized_card');

module.exports = {
  show: async (req, res) => {
    try {
      const data = await localizedCard.all(req.params.cardId, req.params.localeId);
      if (data.rowCount === 0) {
        return res.sendStatus(404);
      }
      return res.status(200).json(data.rows[0]);
    } catch (error) {
      return res.status(500).json({'err': error.toString()});
    }
  },
  create: async (req, res) => {
    try {
      const {locale_id: localeId, question, answer} = req.body;
      const data = await localizedCard.create(req.params.cardId, localeId, question, answer);
      return res.status(201).json(data.rows[0]);
    } catch (error) {
      return res.status(500).json({'err': error.toString()});
    }
  }
};
