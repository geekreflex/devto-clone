const express = require('express');
const {
  getUserProfile,
  checkUsername,
} = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth.middleware');
const router = express.Router();

router.route('/profile').get(protect, getUserProfile);
router.post('/check-username', checkUsername);

module.exports = router;
