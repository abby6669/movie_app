const express = require('express');
const router = express.Router();
const { UsersController } = require('../controllers')

// CRUD USUARIOS

// Read - GET
router.get('/', UsersController.getAllUsers);
// router.get('/users/:id');


module.exports = router;
