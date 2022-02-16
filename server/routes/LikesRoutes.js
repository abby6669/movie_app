const express = require('express');
const router = express.Router();
const { LikesController } = require('../controllers');

// URLS Likes
//Create like - POST
router.post('/', LikesController.createLike);

// Delete Like - DELETE
router.delete('/', LikesController.deleteLike);

module.exports = router;
