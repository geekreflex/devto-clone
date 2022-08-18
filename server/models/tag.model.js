const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;
