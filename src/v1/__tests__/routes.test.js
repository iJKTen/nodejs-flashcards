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

test('Get card by accept language', async () => {
  await request(app)
      .get('/api/v1/cards/1')
      .set('Accept-Language', 'en-US')
      .send()
      .expect(200)
      .expect('Content-Type', /json/);
});

test('Create card by locale', async () => {
  await request(app)
      .post('/api/v1/cards/1/locale/3')
      .set('Accept', 'application/json')
      .send({
        'question': 'Ist Pluto ein Planet?',
        'answer': 'Es ist ein Hund, aber für manche Menschen ist Hund ihr Planet.'
      })
      .expect(201);
});

test('Create card', async () => {
  await request(app)
      .post('/api/v1/cards/locale/3')
      .set('Accept', 'application/json')
      .send({
        'question': 'Plutone ha un cuore su di esso quindi non può essere un pianeta nano, giusto?',
        'answer': 'Proprio come tutti i cani, Plutone ha il cuore più grande!'
      })
      .expect(201);
});
