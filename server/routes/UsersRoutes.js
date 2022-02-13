const express = require('express');
const router = express.Router();
const { UsersController, AuthController, LikesController, CommentsController, WatchedController } = require('../controllers')

// CRUD USUARIOS
// Create - POST
// router.post('/users');

// Read - GET
router.get('/users', UsersController.getAllUsers);
// router.get('/users/:id');

// AUTH Usuarios
// Register - POST
router.post('/auth/register', AuthController.createUser);

// Update - PUT/PATCH
router.put('/auth/:id', AuthController.updateUser);

// Login - POST
router.post('/auth/login', AuthController.loginUser);

// Logout - POST
router.post('/auth/logout', AuthController.logoutUser);

// URLS Likes 
//Create like - POST
router.post('/like', LikesController.createLike);

// Delete Like - DELETE
router.delete('/like/:id', LikesController.deleteLike);

// URLS Comments 
//Create like - POST
router.post('/comment', CommentsController.createComment);

// Delete Like - DELETE
router.delete('/comment/:id', CommentsController.deleteComment);

// URLS Watched 
//Create like - POST
router.post('/watched', WatchedController.createWatched);

// Delete Like - DELETE
router.delete('/watched/:id', WatchedController.deleteWatched);

module.exports = router;