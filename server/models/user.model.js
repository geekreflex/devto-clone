const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    bio: {
      type: String,
    },
    websiteUrl: {
      type: String,
    },
    currentlyLearning: {
      type: String,
    },
    currentlyHacking: {
      type: String,
    },
    skillsLanguage: {
      type: String,
    },
    availableFor: {
      type: String,
    },
    work: {
      type: String,
    },
    education: {
      type: String,
    },
    brandColor1: '#000',
    brandColor2: '#fff',
    password: {
      type: String,
    },
    location: {
      type: String,
    },
    loginType: {
      type: String,
      enum: ['github', 'twitter', 'email'],
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    readingList: [{ type: mongoose.Types.ObjectId, ref: 'Post' }],
    followedTags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    followers: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    followedUsers: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
module.exports = User;
