const express = require('express');
const { getTags, createTag } = require('../controllers/tag.controller');
const router = express.Router();

router.get('/', getTags);
router.post('/', createTag);

module.exports = router;
