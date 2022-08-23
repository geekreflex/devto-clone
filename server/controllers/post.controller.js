const Post = require('../models/post.model');
const expressAsyncHandler = require('express-async-handler');
const { generateSlug } = require('../utils/generateSlug');
const User = require('../models/user.model');

const getPosts = expressAsyncHandler(async (req, res) => {
  Post.find()
    .populate('tags')
    .populate('user', 'username name avatar location bio, email')
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          message: 'Error occured',
        });
      }

      return res.status(200).json({
        payload: posts,
        message: 'Post retrieved successfully',
      });
    });
});

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

const updatePost = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const postId = req.params.id;
  const { title, content, coverImg, tags } = req.body;

  const updatedPost = {
    title,
    content,
    coverImg,
    tags,
    slug: generateSlug(title),
  };

  console.log(updatedPost);

  Post.findOneAndUpdate(
    { _id: postId, user: userId },
    updatedPost,
    { new: true },
    (err, post) => {
      if (err) {
        return res.status(400).json({ message: 'Error occured', err });
      }

      return res.status(200).json({
        status: 'success',
        payload: post,
        message: 'Post updated successfully',
      });
    }
  );
});

const deletePost = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const postId = req.params.id;
  Post.findOneAndDelete({ _id: postId, user: userId }, (err, _) => {
    if (err) {
      return res.status(400).json({
        message: 'Error occured',
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Post deleted successfully',
    });
  });
});

const getOnePost = expressAsyncHandler(async (req, res) => {
  const { username, postSlug } = req.params;
  const user = await User.find({ username });
  Post.findOne({ user: user[0]._id, slug: postSlug }, (err, post) => {
    if (err) {
      return res.status(400).json({
        status: 'failed',
        message: 'Error occured',
      });
    }

    return res.status(200).json({
      status: 'success',
      payload: post,
      message: 'Post retrieved successfully',
    });
  }).populate('user');
});

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getOnePost,
};