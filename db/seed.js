'use strict';

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const db = require('../src/v1/data-access/db');
const pathToSql = path.resolve(__dirname, 'seed.sql');
const sql = fs.readFileSync(pathToSql).toString();

db.query(sql);
