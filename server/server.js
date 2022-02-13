// MODULES
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const routes = require('./routes');
require('./db');

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(helmet());

// ENDPOINTS
app.get('/', (req, res) => {
    return res.status(200).send({ message: 'Hola!' });
});

app.use('/api/v1', routes);

module.exports = app;  