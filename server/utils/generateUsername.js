const { nanoid } = require('nanoid');
let id = nanoid(3);

const generateUsername = (name) => {
  let firstName = name.split(' ')[0];
  return `${firstName}_${id}`;
};

module.exports = { generateUsername };
