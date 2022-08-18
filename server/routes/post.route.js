const express = require('express');
const { createPost } = require('../controllers/post.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router
  .route('/')
  .get(function (req, res) {
    res.send('hello');
  })
  .post(protect, createPost);

module.exports = router;
