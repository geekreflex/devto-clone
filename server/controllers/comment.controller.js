const Post = require('../models/post.model');
const Comment = require('../models/comment.model');
const expressAsyncHandler = require('express-async-handler');

const createComment = expressAsyncHandler(async (req, res) => {
  const user = req.user._id;
  const { postId } = req.params;
  const { content } = req.body;

  const post = await Post.findById(postId);

  if (!post) {
    return res.status(200).json({
      status: 'failed',
      payload: [],
      message: 'Post not found',
    });
  }

  const newComment = new Comment({
    author: user,
    content,
    post: postId,
  });

  newComment.save((err, post) => {
    if (err) {
      return res.status(400).json({
        status: 'failed',
        message: `Error occured ${err}`,
      });
    }

    return res.status(200).json({
      status: 'success',
      payload: post,
      message: 'Comment posted successfully',
    });
  });
});

const getPostComments = expressAsyncHandler(async (req, res) => {
  const { postId } = req.params;
  console.log(postId);
  Comment.find({ post: postId })
    .populate('author post')
    .exec((err, comments) => {
      if (err) {
        return res.status(400).json({
          status: 'failed',
          message: `Error occured ${err}`,
        });
      }

      return res.status(200).json({
        status: 'success',
        payload: comments,
        message: 'Comments retrieved successfully',
      });
    });
});

const editComment = expressAsyncHandler(async (req, res) => {
  const { commentId } = req.params;
  console.log(commentId);
});

module.exports = {
  createComment,
  getPostComments,
  editComment,
};
