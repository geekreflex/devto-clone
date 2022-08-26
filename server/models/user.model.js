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
    website: {
      type: String,
    },
    learning: {
      type: String,
    },
    hacking: {
      type: String,
    },
    skills: {
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
    password: {
      type: String,
    },
    location: {
      type: String,
    },
    loginType: {
      type: String,
      enum: ['github', 'google', 'email'],
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    brandColor1: {
      type: String,
      required: true,
    },
    brandColor2: {
      type: String,
      default: '#ffffff',
      required: true,
    },
    mode: {
      type: String,
      required: true,
      default: 'light',
    },
    sawOnboarding: { type: Boolean, default: false },
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
