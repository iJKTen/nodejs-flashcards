const request = require('supertest');
const app = require('../../app');

test('Get all locales', async () => {
  await request(app)
      .get('/api/v1/locales')
      .send()
      .expect(200)
      .expect('Content-Type', /json/);
});

test('Get locale by id', async () => {
  await request(app)
      .get('/api/v1/locales/1')
      .send()
      .expect(200)
      .expect('Content-Type', /json/);
});

test('Create locale', async () => {
  await request(app)
      .post('/api/v1/locales')
      .send({
        locale: 'it-CH'
      })
      .expect(201);
});

test('Get all cards', async () => {
  await request(app)
      .get('/api/v1/cards')
      .send()
      .expect(200)
      .expect('Content-Type', /json/);
});

test('Get localized cards', async () => {
  await request(app)
      .get('/api/v1/cards/1')
      .send()
      .expect(200)
      .expect('Content-Type', /json/);
});

test('Get a card by locale', async () => {
  await request(app)
      .get('/api/v1/cards/1/localized_cards/1')
      .send()
      .expect(200)
      .expect('Content-Type', /json/);
});

test('Create card', async () => {
  await request(app)
      .post('/api/v1/cards')
      .set('Accept', 'application/json')
      .send({
        'question': 'Ist Pluto ein Planet?',
        'answer': 'Es ist ein Hund, aber für manche Menschen ist Hund ihr Planet.',
        'locale_id': 3
      })
      .expect(201);
});

test('Create Localized Card', async () => {
  await request(app)
      .post('/api/v1/cards/1/localized_cards')
      .set('Accept', 'application/json')
      .send({
        'question': 'Plutone ha un cuore su di esso quindi non può essere un pianeta nano, giusto?',
        'answer': 'Proprio come tutti i cani, Plutone ha il cuore più grande!',
        'locale_id': 3
      })
      .expect(201);
});
