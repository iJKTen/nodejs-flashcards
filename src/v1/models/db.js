'use strict';

const {Pool} = require('pg');

let pool = null;
if (process.env.NODE_ENV === 'test') {
  pool = new Pool({
    user: 'bigspring_casestudy_ijkten_test',
    host: 'localhost',
    database: 'bigspring_casestudy_ijkten_test',
    password: 'bigspring_casestudy_ijkten_test',
    port: 5432
  });
} else {
  pool = new Pool();
}

module.exports = {
  query: (text, params) => pool.query(text, params)
};
