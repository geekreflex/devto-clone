const express = require('express');
const {
  getUserProfile,
  checkUsername,
  addPostToReadingList,
  getPublicProfile,
  updateUserProfile,
} = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.get('/:username', getPublicProfile);
router.post('/check-username', checkUsername);
router.post('/reading-list', protect, addPostToReadingList);
router.put('/update', protect, updateUserProfile);

module.exports = router;
