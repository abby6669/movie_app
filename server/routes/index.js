const express = require('express');
const router = express.Router();
const UsersRoutes = require('./UsersRoutes');
const AuthRoutes = require('./AuthRoutes');
const CommentsRoutes = require('./CommentsRoutes');
const LikesRoutes = require('./LikesRoutes');
const WatchedRoutes = require('./WatchedRoutes');


router.use('/users', UsersRoutes);
router.use('/auth', AuthRoutes);
router.use('/like', LikesRoutes);
router.use('/comment', CommentsRoutes);
router.use('/watched', WatchedRoutes);

module.exports = router;
