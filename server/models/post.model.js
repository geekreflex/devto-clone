const mongoose = require('mongoose');
const slugify = require('slugify');
const { randomStr } = require('../utils/randomStr');

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImg: {
      type: String,
    },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    slug: { type: String, unique: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    savedList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bookmark' }],
  },
  { timestamps: true }
);

postSchema.pre('save', async function (next) {
  let genSlug = await slugify(this.title, { lower: true });
  this.slug = `${genSlug}-${randomStr()}`;
  next();
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
