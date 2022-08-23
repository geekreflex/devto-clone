const express = require('express');
const {
  createComment,
  getPostComments,
  editComment,
  deleteComment,
  getUserComments,
} = require('../controllers/comment.controller');
const { protect } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/user', protect, getUserComments);
router.get('/:postId/comments', protect, getPostComments);
router.post('/:postId/comment', protect, createComment);
router.put('/:commentId/edit', protect, editComment);
router.delete('/:commentId/delete', protect, deleteComment);

module.exports = router;
