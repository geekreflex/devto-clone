const { default: slugify } = require('slugify');
const { randomStr } = require('./randomStr');

const generateSlug = (title) => {
  let genSlug = slugify(title, { lower: true });
  return `${genSlug}-${randomStr()}`;
};

module.exports = { generateSlug };
