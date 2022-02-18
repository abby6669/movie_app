const express = require('express');
const router = express.Router();
const { LikesController } = require('../controllers');

// URLS Likes
//Create like - POST
router.post('/', LikesController.createLike);

// GET ALL
router.get('/:userId', LikesController.getLikes);

// Delete Like - DELETE
router.delete('/', LikesController.deleteLike);

module.exports = router;
