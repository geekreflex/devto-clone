const express = require('express');

const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  getOnePost,
  getUserPosts,
  addPostBookmark,
  removePostBookmark,
} = require('../controllers/post.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/user', protect, getUserPosts);
router.get('/', getPosts);
router.post('/', protect, createPost);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);
router.get('/:username/:postSlug', getOnePost);
router.post('/bookmark/add', protect, addPostBookmark);
router.post('/bookmark/remove', protect, removePostBookmark);

module.exports = router;
