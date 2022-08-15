const express = require('express');
const router = express.Router();

const {
  githubAuth,
  userRegisterAuth,
} = require('../controllers/auth.controller');

router.get('/github', (_, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.TWITTER_CLIENT_ID}`
  );
});
router.get('/github/callback', githubAuth);
router.post('/register', userRegisterAuth);

module.exports = router;
