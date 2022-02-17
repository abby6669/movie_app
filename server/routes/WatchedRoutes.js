const express = require('express');
const router = express.Router();
const { WatchedController } = require('../controllers');
// URLS Watched
//Create watched - POST
router.post('/', WatchedController.createWatched);

//Read watched -READ
// 
// router.post('/', WatchedController.readOneWatch);
//
// //Update watched -UPDATE
//
// router.post('/', WatchedController.updateWatch);

// Delete watched - DELETE
router.delete('/:id', WatchedController.deleteWatched);

module.exports = router;
