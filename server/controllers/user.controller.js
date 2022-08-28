const User = require('../models/user.model');
const expressAsyncHandler = require('express-async-handler');
const Bookmark = require('../models/bookmark.model');
const Post = require('../models/post.model');

const updateUserProfile = expressAsyncHandler(async (req, res) => {
  const userId = req.user.id;

  User.findOneAndUpdate(
    { _id: userId },
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ message: 'Error occured', err });
      }

      return res.status(200).json({
        status: 'success',
        user,
        message: 'Profile updated successfully',
      });
    }
  );
});

const getUserProfile = expressAsyncHandler(async (req, res) => {
  const userId = req.user.id;
  User.findById(userId, (err, user) => {
    if (err) {
      return res.status(400).json({
        message: 'Error occured',
      });
    }

    res.status(200).json({
      message: 'successfully retreived user data',
      user,
    });
  }).populate('readingList');
});

const getPublicProfile = expressAsyncHandler(async (req, res) => {
  const { username } = req.params;
  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.status(400).json({
        message: 'Error occured',
      });
    }

    if (!user) {
      return res.status(400).json({
        message: 'User not found',
      });
    }

    res.status(200).json({
      message: 'successfully retreived user data',
      user,
    });
  }).select(
    'name username avatar email createdAt bio location website brandColor1 work education githubUrl'
  );
});

const checkUsername = expressAsyncHandler(async (req, res) => {
  const { username } = req.body;

  User.find({ username }, (err, user) => {
    if (!err) {
      if (user.length > 0) {
        return res.json({ status: 'failed', message: 'Username is taken' });
      }

      return res.json({ status: 'success', message: 'Username is available' });
    }
  });

  console.log(username);
});

const addToBookmark = expressAsyncHandler(async (req, res) => {
  const { postId } = req.body;
  const userId = req.user.id;

  const bookmark = new Bookmark({
    post: postId,
    user: userId,
  });

  await bookmark.save();
  const user = await User.findById(userId);
  const post = await Post.findById(postId);

  user.readingList.push(bookmark);
  post.savedList.push(bookmark);
  await post.save();

  user
    .save()
    .populate('readingList')
    .exec(function (err, user) {
      if (err) {
        console.log(err);
        return;
      }

      return res.status(200).json({
        status: 'success',
        user,
        message: 'Added to reading list',
      });
    });
});

const removeFromBookmark = expressAsyncHandler(async (req, res) => {
  const { postId } = req.body;
  const userId = req.user.id;

  console.log('remove');

  const bookmark = Bookmark.findOne({ post: postId });

  const user = await User.findById(userId);
  const post = await Post.findById(postId);
  user.readingList.pull(bookmark);
  post.savedList.savedList(bookmark);
  user.save();
  post.save();

  Bookmark.findOneAndDelete({ post: postId }, (err, doc) => {
    if (err) {
      console.log(err);
    }

    return res.status(200).json({
      status: 'success',
      user,
      message: 'Removed from reading list',
    });
  }).populate('readingList');
});

module.exports = {
  getUserProfile,
  checkUsername,
  addToBookmark,
  getPublicProfile,
  removeFromBookmark,
  updateUserProfile,
};
