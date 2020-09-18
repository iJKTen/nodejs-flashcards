'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const routesV1 = require('./v1/routes');

app.use(express.json());
app.use('/api/v1', routesV1);

app.use(function(req, res) {
  return res.status(404).send({'error': 'Resource not found'});
});

module.exports = app;
