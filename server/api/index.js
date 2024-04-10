const express = require('express');
const router = express.Router();

const itemRoutes = require('./item');
const reviewRoutes = require('./review');
const commentRoutes = require('./comment');
const userRoutes = require('./users');

router.use('/items', itemRoutes);
router.use('/review', reviewRoutes);
router.use('/comment', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;