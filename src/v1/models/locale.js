'use strict';

const db = require('./db');

module.exports = {
  all: async () => {
    return await db.query('select * from locales');
  },
  findById: async (id) => {
    return await db.query('select * from locales where id = $1', [id]);
  },
  findByCode: async (locale) => {
    return await db.query('select * from locales where locale = $1', [locale]);
  },
  create: async (locale) => {
    return await db.query('INSERT INTO locales (locale) VALUES ($1) RETURNING *', [locale]);
  }
};
