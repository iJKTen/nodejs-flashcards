/* eslint-disable require-jsdoc */
'use strict';

const db = require('../models/db');

async function all(cardId, localeId) {
  return await db.query(`select lc.id, lc.card_id, lc.locale_id, l.locale, lc.question, lc.answer 
  from localized_cards lc inner join locales l on l.id = lc.locale_id
      where lc.card_id = $1 and lc.locale_id = $2;`, [cardId, localeId]);
}

async function create(cardId, localeId, question, answer) {
  return await db.query(`INSERT INTO localized_cards (card_id, locale_id, question, answer) 
  VALUES ($1, $2, $3, $4) RETURNING *;`, [cardId, localeId, question, answer]);
}

module.exports = {
  all,
  create
};
