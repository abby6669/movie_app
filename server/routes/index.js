const express = require('express');
const router = express.Router();
const UsersRoutes = require('./UsersRoutes');
const CommentsRoutes = require('./CommentsRoutes');
const LikesRoutes = require('./LikesRoutes');
const WatchedRoutes = require('./WatchedRoutes');


router.use('/users', UsersRoutes);
router.use('/likes', LikesRoutes);
router.use('/comments', CommentsRoutes);
router.use('/watched', WatchedRoutes);

module.exports = router;
