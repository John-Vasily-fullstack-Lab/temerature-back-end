const { Router } = require('express');
const Loaction = require('../models/Location');
const Temperature = require('../models/Temperature');

module.exports = Router()
  .get('/status', (req, res, next) => {
    res.status(204);
    res.end();
  })

  .post('/register', (req, res, next) => {
    const { name } = req.body;

    Loaction
      .create({ name })
      .then(location => res.send({ _id: location._id }))
      .then(res => res.status(200))
      .catch(next);
  })

  .delete('/deregister', (req, res, next) => {
    res.status(204);
    res.end();
  })

  .post('/temp/:id', (req, res, next) => {
    const id = req.params.id;
    
    const { temperature } = req.body;
    
    Temperature
      .create({ temperature, locationId: id })
      .then(temp => res.send(temp))
      .catch(next);
  });
  



