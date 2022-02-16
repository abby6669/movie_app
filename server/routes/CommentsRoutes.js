const express = require('express');
const router = express.Router();
const { CommentsController } = require('../controllers');

// URLS Comments

//Read all comment - POST
router.get('/', CommentsController.readComment);

//Create comment - POST
router.post('/', CommentsController.createComment);

// Update comment
router.put('/:id', CommentsController.updateComment)

// Delete comment - DELETE
router.delete('/:id', CommentsController.deleteComment);

module.exports = router;
