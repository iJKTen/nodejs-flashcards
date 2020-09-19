DROP TABLE IF EXISTS localized_cards;
DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS locales;

CREATE TABLE locales (
  id SERIAL PRIMARY KEY,
  locale text NOT NULL,
  UNIQUE (locale)
);

CREATE TABLE cards (
  id SERIAL PRIMARY KEY
);

CREATE TABLE localized_cards (
  id SERIAL PRIMARY KEY,
  card_id INTEGER NOT NULL REFERENCES cards,
  locale_id INTEGER NOT NULL REFERENCES locales,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  UNIQUE(card_id, locale_id)
);

DO $$
declare cardId integer;
BEGIN

  INSERT INTO locales (locale) VALUES ('en-US');
  INSERT INTO locales (locale) VALUES ('fr-CA');

  INSERT INTO cards DEFAULT VALUES RETURNING id INTO cardId;

  INSERT INTO localized_cards (card_id, locale_id, question, answer) 
  VALUES (cardId, (select id from locales where locale = 'en-US'), 'Is pluto a planet?', 'It is a dog but for some humans dog is their planet.');

  INSERT INTO localized_cards (card_id, locale_id, question, answer) 
  VALUES (cardId, (select id from locales where locale = 'fr-CA'), 'Pluton est-elle une planète?', 'C''est un chien mais pour certains humains, le chien est leur planète.');

END $$;
