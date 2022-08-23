const express = require('express');
const router = express.Router();

const {
  githubAuth,
  userRegisterAuth,
  userLoginAuth,
  googleAuth,
  userLogoutAuth,
} = require('../controllers/auth.controller');
const { TWITTER_CLIENT_ID } = require('../utils/constants');

router.get('/github', (_, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${TWITTER_CLIENT_ID}`
  );
});
router.get('/github/callback', githubAuth);
router.post('/register', userRegisterAuth);
router.post('/login', userLoginAuth);
router.get('/logout', userLogoutAuth);
router.post('/google', googleAuth);

module.exports = router;
