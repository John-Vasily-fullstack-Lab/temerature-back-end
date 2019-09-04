const app = require('../app');
const request = require('superagent');


module.export = () => {
  
  return request(app)
    .post('http://temp.alchemycodelab.io/subscribe')
    .send({ url: process.env.HOST })
    .then(res => {
      if(!res.ok) throw 'error occured';
    });
};
