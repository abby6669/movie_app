//MODULES
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const PORT = 8080;

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(helmet());

//ENDPOINTS
app.use('/api/v1', require('./routes'));

//LISTENER
app.listen(PORT, () => 
console.log(`Servidor corriendo: http://localhost:${PORT}`)
);

module.exports = app;