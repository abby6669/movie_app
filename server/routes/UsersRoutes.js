const express = require('express');
const router = express.Router();
const { UsersController } = require('../controllers');

// AUTH Usuarios
// Register - POST /register
router.post('/register', UsersController.create);

// Login - POST /login
router.post('/login', UsersController.login);

// Leer todos - GET /:id

// Leer uno - GET /:id

// Actualizar - PUT /:id

// Borrar - DELETE /:id



module.exports = router;