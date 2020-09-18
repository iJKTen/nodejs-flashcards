'use strict';

const languageParser = require('accept-language-parser');

module.exports = {
  parse: (lang) => {
    const languages = languageParser.parse(lang);

    let quality = 0;
    let langObj = null;
    languages.forEach((obj) => {
      if (obj.quality > quality) {
        quality = obj.quality;
        langObj = obj;
      }
    });

    if (langObj !== null && langObj.code !== undefined && langObj.region !== undefined) {
      return `${langObj.code}-${langObj.region}`;
    }

    return null;
  }
};
