DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS locales;

CREATE TABLE locales (
  id SERIAL PRIMARY KEY,
  locale text NOT NULL,
  UNIQUE (locale)
);

CREATE TABLE cards (
  id SERIAL,
  locale_id integer references locales,
  question text NOT NULL,
  answer text NOT NULL,
  PRIMARY KEY (id, locale_id)
);

INSERT INTO locales (locale) VALUES ('en-US');
INSERT INTO locales (locale) VALUES ('fr-CA');

INSERT INTO cards (locale_id, question, answer) 
VALUES ((select id from locales where locale = 'en-US'), 'Is pluto a planet?', 'It is a dog but for some humans dog is their planet.');

INSERT INTO cards (id, locale_id, question, answer) 
VALUES (1, (select id from locales where locale = 'fr-CA'), 'Pluton est-elle une planète?', 'C''est un chien mais pour certains humains, le chien est leur planète.');
