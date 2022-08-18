const Post = require('../models/post.model');
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/user.model');

const createPost = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { title, content, coverImg, tags } = req.body;

  const newPost = new Post({
    title,
    content,
    coverImg,
    tags,
    user: userId,
  });

  newPost.save((err, post) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.status(200).json({
      status: 'success',
      message: 'Post created successfully',
      payload: post,
    });
  });
});

module.exports = {
  createPost,
};
