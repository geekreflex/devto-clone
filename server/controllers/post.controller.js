const Post = require('../models/post.model');
const expressAsyncHandler = require('express-async-handler');
const { generateSlug } = require('../utils/generateSlug');
const User = require('../models/user.model');
const { getUserProfile } = require('./user.controller');

const getPosts = expressAsyncHandler(async (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .populate('tags')
    .populate('comments')
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
  ).populate(
    'author',
    'username name avatar location bio email work brandColor1 createdAt'
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
    .populate('comments')
    .populate('savedList')
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

const addPostBookmark = expressAsyncHandler(async (req, res) => {
  const { postId } = req.body;
  const userId = req.user.id;

  const user = await User.findById(userId);
  const post = await Post.findById(postId);

  user.readingList.push(postId);
  post.savedList.push(userId);
  await post.save();
  await user.save();

  getUserProfile(req, res);
});

const removePostBookmark = expressAsyncHandler(async (req, res) => {
  const { postId } = req.body;
  const userId = req.user.id;

  const user = await User.findById(userId);
  const post = await Post.findById(postId);

  user.readingList.pull(postId);
  post.savedList.pull(userId);

  await post.save();
  await user.save();

  getUserProfile(req, res);
});

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getOnePost,
  getUserPosts,
  addPostBookmark,
  removePostBookmark,
};
