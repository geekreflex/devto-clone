const mongoose = require('mongoose');

const bookmarkSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
  { timestamps: true }
);

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);
module.exports = Bookmark;
