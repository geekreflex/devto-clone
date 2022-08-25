const express = require('express');
const {
  getUserProfile,
  checkUsername,
  addPostToReadingList,
} = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.post('/check-username', checkUsername);
router.post('/reading-list', protect, addPostToReadingList);

module.exports = router;
