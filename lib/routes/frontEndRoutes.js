const { Router } = require('react');
const Temperature = require('../models/Temperature');
const Location = require('../models/Location');

module.exports = Router()

  .get('/', (req, res, next) => {
    Location
      .find()
      .then(locations => {
        res.send(locations);
      })
      .catch(next);
  })

  .get('./:id', (req, res, next) => {
    Location
      .findById(req.params.id)
      .then(location => res.send(location))
      .catch(next);
  })

  .get('/Temperature/', (req, res, next) => {
    Temperature
      .find()
      .then(temperature => {
        res.send(temperature);
      })
      .catch(next);
  });

