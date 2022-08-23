const express = require('express');
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  getOnePost,
} = require('../controllers/post.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/', getPosts);
router.post('/', protect, createPost);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);
router.get('/:username/:postSlug', getOnePost);

module.exports = router;
