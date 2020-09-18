'use strict';

module.exports = {
  extends: ['eslint:recommended', 'google'],
  env: {
    jest: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'prefer-template': 'error',
    'complexity': ['error', 50],
    'max-len': ['error', {code: 120}]
  }
};
