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

  post.comments.push(newComment);
  post.save((err) => {
    if (err) {
      console.log(err);
    }
  });

  newComment.save((err, comment) => {
    if (err) {
      return res.status(400).json({
        status: 'failed',
        message: `Error occured ${err}`,
      });
    }

    return res.status(200).json({
      status: 'success',
      payload: comment,
      message: 'Comment posted successfully',
    });
  });
});

const getPostComments = expressAsyncHandler(async (req, res) => {
  const { postId } = req.params;
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

const getUserComments = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;

  console.log(userId);

  Comment.find({ author: userId }, (err, comments) => {
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
  const { content } = req.body;

  Comment.findByIdAndUpdate(
    commentId,
    { content },
    { new: true },
    (err, comment) => {
      if (err) {
        return res.status(400).json({
          status: 'failed',
          message: `Error occured ${err}`,
        });
      }

      return res.status(200).json({
        status: 'success',
        payload: comment,
        message: 'Comments updated successfully',
      });
    }
  );
});

const deleteComment = expressAsyncHandler(async (req, res) => {
  const { commentId } = req.params;
  Comment.findOneAndDelete(commentId, (err, _) => {
    if (err) {
      return res.status(400).json({
        status: 'failed',
        message: `Error occured ${err}`,
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Comment deleted successfully',
    });
  });
});

module.exports = {
  createComment,
  getPostComments,
  editComment,
  deleteComment,
  getUserComments,
};
