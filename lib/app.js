const express = require('express');
const app = express();

app.use(express.json());

app.use('/status', require('./routes/networkRoutes'));
app.use('/register', require('./routes/networkRoutes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
