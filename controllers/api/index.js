const router = require('express').Router();

const userRoutes = require('./users.js');
const createposts = require('./createposts.js');
const deleteposts = require('./deleteposts.js');
const updateposts = require('./updateposts.js');
const createcomment = require('./createcomment.js');

router.use('/user', userRoutes);
router.use('/createpost', createposts);
router.use('/deletepost', deleteposts);
router.use('/updatepost', updateposts);
router.use('/comment', createcomment);

module.exports = router;
