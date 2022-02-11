const express = require('express');
const router = express();

// CRUD USUARIOS
// Create - POST
router.post('/users');

// Read - GET
router.get('/users');
router.get('/users/:id');

// Update - PUT/PATCH
router.put('/users/:id');

// Delete - DELETE
router.delete('/users/:id');

module.exports = router;