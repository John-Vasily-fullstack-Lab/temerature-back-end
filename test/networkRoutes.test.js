require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Location = require('../lib/models/Location');
const Temperature = require('../lib/models/Temperature');

describe('contact routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('get the status of temps', () => {
    return request(app)
      .get('/status')
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });

  it('new temp station response', () => {
    const location = Location
      .create({ name: 'Mars' });

    return request(app)
      .post('/register')
      .send(location._id)
      .then(res => {
        expect(res.body).toEqual({ _id: expect.any(String) }),
        expect(res.status).toEqual(200);
      }); 
  });

  it('stop when temp monitor is offline', () => {
    return request(app)
      .delete('/deregister')
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });

  it('gets temp from monitor station', async() => {
    const location =  await Location
      .create({ name: 'shmars' });

    return request(app)
      .post(`/temp/${location._id}`)
      .send({ temperature: 45 })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          temperature: 45,
          locationId: expect.any(String)
        });
      });
  });
});
