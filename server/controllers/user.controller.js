const User = require('../models/user.model');
const asyncHandler = require('express-async-handler');

const getUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  console.log(req.user);
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

module.exports = { getUserProfile };
