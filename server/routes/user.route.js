const express = require('express');
const {
  getUserProfile,
  checkUsername,
  getPublicProfile,
  updateUserProfile,
} = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.get('/:username', getPublicProfile);
router.post('/check-username', protect, checkUsername);
router.put('/update', protect, updateUserProfile);

module.exports = router;
