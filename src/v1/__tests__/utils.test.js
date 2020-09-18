'use strict';

const langUtil = require('../../utils/locale-parse');

test('Check english in US', () => {
  expect(langUtil.parse('en-US')).toBe('en-US');
});

test('Locale will fail', () => {
  expect(langUtil.parse('wrong')).toBeNull();
});
