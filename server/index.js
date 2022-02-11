//MODULES
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(helmet());

//ENDPOINTS
// app.use('/api/v1', require('./routes'));
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
    console.log("max!!");
})

module.exports = app;  