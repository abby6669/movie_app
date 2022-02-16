const express = require('express');
const router = express.Router();
const { UsersController } = require('../controllers');

// AUTH Usuarios
// Register - POST /register
router.post('/register', UsersController.create);

// Login - POST /login
router.post('/login', UsersController.login);

// Leer todos - GET /
router.get('/', UsersController.findAll); 

// Leer uno - GET /:id
router.get('/:id', UsersController.findById);

// Actualizar - PUT /:id
router.put(':/id', UsersController.findByIdAndUpdate);

// Borrar - DELETE /:id
router.delete('/:id', UsersController.findByIdAndDelete);

module.exports = router;