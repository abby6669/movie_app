const express = require('express');
const router = express.Router();
const { CommentsController } = require('../controllers');
// URLS Comments
//Create like - POST
router.post('/', CommentsController.createComment);

// Delete Like - DELETE
router.delete('/:id', CommentsController.deleteComment);

module.exports = router;
