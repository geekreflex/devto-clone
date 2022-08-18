const randomStr = () => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z0-9]+/g, '')
    .substr(0, 4);
};

module.exports = { randomStr };
