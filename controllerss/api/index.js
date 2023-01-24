const router = require('express').Router();

const userRoutes = require('./users.js');
const postRoutes = require('./posts.js');
const commentRoutes = require('./createcomment.js');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
