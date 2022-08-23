const Tag = require('../models/tag.model');
const tags = require('../data/tags.json');
const expressAsyncHandler = require('express-async-handler');

const getTags = expressAsyncHandler(async (req, res) => {
  Tag.find((err, data) => {
    if (err) {
      console.log('Error');
      return;
    }

    return res.status(200).json({
      status: 'success',
      payload: data,
      message: 'Successfully retrieved tags',
    });
  });
});

const createTag = expressAsyncHandler(async (req, res) => {
  const { name, alias, description, color } = req.body;
  const newTag = new Tag({
    name,
    alias,
    description,
    color,
  });
  newTag.save((err, tag) => {
    if (err) {
      return res.json({ status: 'failed', message: 'Error occured' });
    }

    return res
      .status(200)
      .json({
        status: 'success',
        payload: tag,
        message: 'Successfully created tag',
      });
  });
});

// Help for test
// Insert many from /data folder
const InsertManyTags = () => {
  Tag.insertMany(tags, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      return;
    }
    console.log('Success: ', res);
  });
};

module.exports = { InsertManyTags, getTags, createTag };
