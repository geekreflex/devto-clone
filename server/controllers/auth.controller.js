const User = require('../models/user.model');
const axios = require('axios');
const generateToken = require('../utils/generateToken');
const expressAsyncHandler = require('express-async-handler');
const { OAuth2Client } = require('google-auth-library');
const {
  REDIRECT_URL,
  TWITTER_CLIENT_SECRET,
  TWITTER_CLIENT_ID,
} = require('../utils/constants');
const { generateUsername } = require('../utils/generateUsername');
const { generateColor } = require('../utils/generateColor');

/**
 * Github login
 */
const githubAuth = expressAsyncHandler(async (req, res) => {
  const requestToken = req.query.code;

  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${TWITTER_CLIENT_ID}&client_secret=${TWITTER_CLIENT_SECRET}&code=${requestToken}`,
    headers: {
      accept: 'application/json',
    },
  }).then((response) => {
    axios({
      method: 'get',
      url: `https://api.github.com/user`,
      headers: {
        Authorization: `token ${response.data.access_token}`,
      },
    }).then((response) => {
      const { email, name, avatar_url, location, html_url, bio } =
        response.data;

      User.findOne({ email }).exec((err, user) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            message: `Error ocurred ${err}`,
          });
        }

        if (user) {
          user.githubUrl = html_url;
          user.save();
          return res
            .cookie('user_access_token', generateToken(user._id))
            .redirect(REDIRECT_URL);
        }

        let password = email + process.env.JWT_SECRET;

        const newUser = new User({
          name,
          email,
          avatar: avatar_url,
          location,
          password,
          loginType: 'github',
          username: generateUsername(name),
          brandColor1: generateColor(),
          bio,
          githubUrl: html_url,
        });

        newUser.save((err, user) => {
          if (err) {
            return res.status(400).json({
              message: `User signup failed with github ${err}`,
            });
          }

          res
            .cookie('user_access_token', generateToken(user._id))
            .redirect(REDIRECT_URL);
        });
      });
    });
  });
});

/**
 * Google login
 */
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const googleAuth = expressAsyncHandler(async (req, res) => {
  const { idToken } = req.body;

  if (!idToken) {
    console.log('token required: ', idToken);
    return;
  }

  client
    .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID })
    .then((response) => {
      const { email_verified, name, email, picture } = response.payload;
      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            return res
              .cookie('user_access_token', generateToken(user._id))
              .json({
                status: 'success',
                message: 'Successfully logged in with google',
              });
          }

          const password = email + process.env.JWT_SECRET;
          const newUser = new User({
            name,
            email,
            password,
            avatar: picture,
            loginType: 'google',
            username: generateUsername(name),
            brandColor1: generateColor(),
          });

          newUser.save((err, user) => {
            if (err) {
              return res.status(400).json({
                message: `User signup failed with google ${err}`,
              });
            }

            return res
              .cookie('user_access_token', generateToken(user._id))
              .json({
                status: 'success',
                message: 'Successfully logged in with google',
              });
          });
        });
      }
    });
});

/**
 * Email register
 */
const userRegisterAuth = expressAsyncHandler(async (req, res) => {
  const { name, email, password, username } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(400).json({ message: `Error ocurred ${err}` });
    }

    if (user) {
      return res.status(201).json({ message: 'Email already exists' });
    }

    const newUser = new User({
      name,
      email,
      password,
      loginType: 'email',
      username,
    });

    newUser.save((err, user) => {
      if (err) {
        return res.status(400).json({
          message: `Error ocurred ${err}`,
        });
      }

      return res
        .status(201)
        .cookie('user_access_token', generateToken(user._id))
        .json({ status: 'success', message: 'Registered successfully' });
    });
  });
});

/**
 * Email login
 */
const userLoginAuth = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(400).json({ status: 'failed', message: 'err' });
    }

    if (user && user.matchPassword(password)) {
      return res
        .status(200)
        .cookie('user_access_token', generateToken(user._id))
        .json({ status: 'success', message: 'Logged in successfully' });
    }
  });
});

/**
 * Logout
 */

const userLogoutAuth = (req, res) => {
  return res
    .clearCookie('user_access_token', {
      path: '/',
    })
    .redirect(REDIRECT_URL);
};

module.exports = {
  githubAuth,
  userRegisterAuth,
  userLoginAuth,
  googleAuth,
  userLogoutAuth,
};
