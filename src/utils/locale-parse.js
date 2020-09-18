'use strict';

module.exports = {
  parseCardLocaleFromSlug: (slug) => {
    let [cardId, locale] = slug.split('-');
    locale = locale.replace('_', '-');
    cardId = parseInt(cardId);
    return [cardId, locale];
  }
};
