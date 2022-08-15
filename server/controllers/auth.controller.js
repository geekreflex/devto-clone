const User = require('../models/user.model');
const axios = require('axios');
const generateToken = require('../utils/generateToken');

const githubAuth = (req, res) => {
  const requestToken = req.query.code;

  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${process.env.TWITTER_CLIENT_ID}&client_secret=${process.env.TWITTER_CLIENT_SECRET}&code=${requestToken}`,
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
      const { email, name, avatar_url, location } = response.data;

      User.findOne({ email }).exec((err, user) => {
        if (err) {
          console.log(err);
          return res.status(400).json({
            message: 'Error occured',
          });
        }

        if (user) {
          return res
            .status(200)
            .json({ token: generateToken(user._id) })
            .redirect('http://localhost:3000');
        }

        const newUser = new User({
          name,
          email,
          avatar: avatar_url,
          location,
          loginType: 'github',
        });

        newUser.save((err, data) => {
          if (err) {
            return res.status(400).json({
              status: 'failed',
              message: 'User signup failed with github',
            });
          }

          res
            .status(200)
            .json({
              token: generateToken(data._id),
            })
            .redirect('http://localhost:3000');
        });
      });
    });
  });
};

module.exports = { githubAuth };
