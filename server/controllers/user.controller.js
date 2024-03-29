const User = require('../models/user.model');
const expressAsyncHandler = require('express-async-handler');

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

module.exports = {
  getUserProfile,
  checkUsername,
  getPublicProfile,
  updateUserProfile,
};
