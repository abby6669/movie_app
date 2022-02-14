const express = require('express');
const router = express.Router();
const { WatchedController } = require('../controllers');
// URLS Watched
//Create like - POST
router.post('/', WatchedController.createWatched);

// Delete Like - DELETE
router.delete('/:id', WatchedController.deleteWatched);

module.exports = router;
