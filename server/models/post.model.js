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
    tags: [],
    slug: { type: String, unique: true },
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

postSchema.pre('save', function (next) {
  let genSlug = slugify(this.title, { lower: true });
  this.slug = `${genSlug}-${randomStr()}`;
  next();
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
