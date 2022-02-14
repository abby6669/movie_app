const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers');
// AUTH Usuarios
// Register - POST
router.post('/register', AuthController.createUser);

// Update - PUT/PATCH
router.put('/:id', AuthController.updateUser);

// Login - POST
router.post('/login', AuthController.loginUser);

// Logout - POST
router.post('/logout', AuthController.logoutUser);

module.exports = router;
