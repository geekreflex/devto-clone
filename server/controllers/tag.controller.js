const Tag = require('../models/tag.model');
const tags = require('../data/tags.json');
const expressAsyncHandler = require('express-async-handler');

const getTags = expressAsyncHandler(async (req, res) => {
  tags.find((err, data) => {
    if (err) {
      console.loog('Error');
      return;
    }

    return res.status(200).json({
      status: 'success',
      payload: data,
      message: 'Successfully retrieved tags',
    });
  });
});

//
const InsertManyTags = () => {
  Tag.insertMany(tags, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      return;
    }
    console.log('Success: ', res);
  });
};

module.exports = { InsertManyTags, getTags };
