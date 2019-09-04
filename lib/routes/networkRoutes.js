const { Router } = require('express');
// const superagent = require('superagent');

module.exports = Router()
  .get('/', (req, res, next) => {

    res.status(204);
    res.end();
  })

  .get('/register', (req, res, next) => {

    res.status(200);
    res.body({ id: '1298491834' })
      .catch(next);
  })
