const express = require('express');
const router = express.Router();
const { CommentsController } = require('../controllers');

// URLS Comments

//Read all comments - POST
router.get('/:itemId', CommentsController.readComments);

//Read one comment - POST
router.get('/:id', CommentsController.readComment);

//Create comment - POST
router.post('/', CommentsController.createComment);

// Update comment
router.put('/:id', CommentsController.updateComment)

// Delete comment - DELETE
router.delete('/:id', CommentsController.deleteComment);

module.exports = router;
