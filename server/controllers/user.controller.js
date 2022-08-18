const User = require('../models/user.model');
const asyncHandler = require('express-async-handler');

const getUserProfile = asyncHandler(async (req, res) => {
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
  });
});

const checkUsername = asyncHandler(async (req, res) => {
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

module.exports = { getUserProfile, checkUsername };
