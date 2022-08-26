const { default: slugify } = require('slugify');
const { randomStr } = require('./randomStr');

const generateSlug = (title) => {
  let genSlug = slugify(title, { lower: true, remove: /[*+~.()'"!?:@]/g });
  return `${genSlug}-${randomStr()}`;
};

module.exports = { generateSlug };
