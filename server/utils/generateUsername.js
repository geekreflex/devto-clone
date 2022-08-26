const { nanoid } = require('nanoid');

const generateUsername = (name) => {
  let firstName = name.split(' ')[0];
  return `${firstName}_${nanoid(3)}`.toLowerCase();
};

module.exports = { generateUsername };
