const Post = require('../models/post.model');
const expressAsyncHandler = require('express-async-handler');
const { generateSlug } = require('../utils/generateSlug');
const User = require('../models/user.model');

const getPosts = expressAsyncHandler(async (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .populate('tags')
    .populate(
      'author',
      'username name avatar location bio email work brandColor1 createdAt'
    )
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

  let newPost = await Post.create({
    title,
    content,
    coverImg,
    tags,
    author: userId,
  });

  newPost = await newPost.populate('author');
  return res.status(200).json({
    status: 'success',
    message: 'Post created successfully',
    payload: newPost,
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

  Post.findOneAndUpdate(
    { _id: postId, author: userId },
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
  const user = await User.findOne({ username });

  Post.findOne({ author: user.id, slug: postSlug }, (err, post) => {
    if (err) {
      return res.status(400).json({
        status: 'failed',
        message: 'Error occured',
        err,
      });
    }

    return res.status(200).json({
      status: 'success',
      payload: post,
      message: 'Post retrieved successfully',
    });
  })
    .populate('tags')
    .populate(
      'author',
      'username name avatar location bio email work brandColor1 createdAt'
    );
});

const getUserPosts = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;

  Post.find({ author: userId }, (err, posts) => {
    if (err) {
      return res.status(400).json({
        status: 'failed',
        message: 'Error occured',
      });
    }

    return res.status(200).json({
      status: 'success',
      payload: posts,
      message: 'Posts retrieved successfully',
    });
  });
});

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getOnePost,
  getUserPosts,
};
