const express = require('express');
const {
  createComment,
  getPostComments,
} = require('../controllers/comment.controller');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/:postId', protect, getPostComments);
router.post('/:postId', protect, createComment);

module.exports = router;
