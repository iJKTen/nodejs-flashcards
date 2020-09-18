/* eslint-disable require-jsdoc */
'use strict';

const db = require('./db');

async function all() {
  return await db.query(`select c.id, c.locale_id, l.locale, c.question, c.answer 
      from cards c inner join locales l on l.id = c.locale_id;`);
}

async function findById(id) {
  return await db.query(`select c.id, c.locale_id, l.code, c.question, c.answer 
  from cards c inner join locales l on l.id = c.locale_id
      where c.id = $1;`, [id]);
}

async function findByIdAndLocale(id, locale) {
  if (locale === null) {
    return await findById(id);
  } else {
    return await db.query(`select c.id, c.locale_id, l.locale, c.question, c.answer 
    from cards c inner join locales l on l.id = c.locale_id
      where c.id = $1 and l.locale = $2;`, [id, locale]);
  }
}

// async function create(localeId, question, answer) {
//   return await db.query(`INSERT INTO cards (locale_id, question, answer) 
//   VALUES ($1, $2, $3) RETURNING *;`, [localeId, question, answer]);
// }

async function create(cardId, locale, question, answer) {
  if (cardId === '') {
    return await db.query(`INSERT INTO cards (locale_id, question, answer) 
    VALUES ((select id from locales where locale = $1), $2, $3) RETURNING *;`, [locale, question, answer]);
  }
  return await db.query(`INSERT INTO cards (id, locale_id, question, answer) 
  VALUES ($1, (select id from locales where locale = $2), $3, $4) RETURNING *;`, [cardId, locale, question, answer]);
}

module.exports = {
  all,
  findById,
  findByIdAndLocale,
  create
};
