/* eslint-disable require-jsdoc */
'use strict';

const db = require('./db');

async function all() {
  return await db.query(`select lc.id, lc.card_id, lc.locale_id, l.locale, lc.question, lc.answer 
    from localized_cards lc inner join locales l on l.id = lc.locale_id;`);
}

async function findById(id) {
  return await db.query(`select lc.id, lc.card_id, lc.locale_id, l.locale, lc.question, lc.answer 
  from localized_cards lc inner join locales l on l.id = lc.locale_id
      where lc.card_id = $1;`, [id]);
}

async function create() {
  return await db.query('INSERT INTO cards DEFAULT VALUES RETURNING id;');
}

module.exports = {
  all,
  findById,
  create
};
