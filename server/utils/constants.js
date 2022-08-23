const REDIRECT_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://clone-devto.herokuapp.com';

const TWITTER_CLIENT_ID =
  process.env.NODE_ENV === 'development'
    ? process.env.TWITTER_CLIENT_ID_DEV
    : process.env.TWITTER_CLIENT_ID_PROD;

const TWITTER_CLIENT_SECRET =
  process.env.NODE_ENV === 'development'
    ? process.env.TWITTER_CLIENT_SECRET_DEV
    : process.env.TWITTER_CLIENT_SECRET_PROD;

const MONGO_URI =
  process.env.NODE_ENV === 'development'
    ? process.env.MONGO_URI_DEV
    : process.env.MONGO_URI_PROD;

module.exports = {
  REDIRECT_URL,
  TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET,
  MONGO_URI,
};
