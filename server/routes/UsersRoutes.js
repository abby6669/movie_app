const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers');

// AUTH Usuarios
// Register - POST /register
router.post('/register', AuthController.register);

// Login - POST /login
router.post('/login', AuthController.login);

// Leer todos - GET /:id

// Leer uno - GET /:id

// Actualizar - PUT /:id

// Borrar - DELETE /:id



module.exports = router;