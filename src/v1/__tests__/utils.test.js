'use strict';

const utils = require('../../utils/locale-parse');

test('Test valid slug', () => {
  expect(utils.parseCardLocaleFromSlug('1-en_US')).toEqual([1, 'en-US']);
});
