export const REDIRECT_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://clone-devto.herokuapp.com';
