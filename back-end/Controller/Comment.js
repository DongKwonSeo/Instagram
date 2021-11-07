const Comments = require("../Model/Comments");
const ErrorResponse = require("../util/errorResponse");
const asyncHandler = require("../middleware/async");
const getCurrentDate = require("../util/CurrentTime");

/** Comment Controller  */
/**
 * @desc : Create Comment
 * @route : POST /api/Comment
 * @access : public
 */
exports.createComment = asyncHandler(async (req, res, next) => {
  const { user_nickname, comment_text, content_id } = req.body;
  if (!user_nickname || !comment_text || !content_id) {
    return next(new ErrorResponse("Bad Param", 400));
  }
  const comment = await Comments.create({
    user_nickname: user_nickname,
    comment_text: comment_text,
    content: content_id,
    content_model:"contents",
  });

  res.status(200).json({
    success: true,
    comment,
  });
});
exports.createDespComment = asyncHandler(async (req, res, next) => {
  const { user_nickname, comment_text, content_id } = req.body;
  if (!user_nickname || !comment_text || !content_id) {
    return next(new ErrorResponse("Bad Param", 400));
  }
  const comment = await Comments.create({
    user_nickname: user_nickname,
    comment_text: comment_text,
    content: content_id,
    content_model:"comments",
  });

  res.status(200).json({
    success: true,
    comment,
  });
});

/**
 * @desc : All Comments
 * @route : Get /api/Comment
 * @access : public
 */
exports.getsComments = asyncHandler(async (req, res, next) => {
  const comments = await Comments.find();
  res.status(200).json({ success: true, comments: comments });
});

/**
 * @desc : Select One Comment
 * @route : Get /api/Comment/:id
 * @access : public
 */
exports.getComment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const comment = await Comments.findById(id).populate("comments");
  res.status(200).json({ success: true, comment: comment });
});
/**
 * @desc : Select One Comment Put
 * @route : put /api/Comment/:id
 * @access : public
 */
exports.putComment = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { comment_text, user_nickname } = req.body;
  const comment = await Comments.findById(id);
  if (user_nickname != comment.user_nickname) {
    return next(new ErrorResponse("댓글 주인이 아닙니다.", 403));
  }
  comment.comment_text = comment_text;
  await comment.save();
  res.status(200).json({ success: true, comment: comment });
});

/**
 * @desc : Select One Comment Delete
 * @route : delete /api/Comment/:id/:user_nickname
 * @access : public
 */
exports.deleteComment = asyncHandler(async (req, res, next) => {
  const { id, user_nickname } = req.params;
  const comment = await Comments.findById(id);
  if (user_nickname.toString() != comment.user_nickname) {
    return next(new ErrorResponse("댓글 주인이 아닙니다.", 403));
  }
  await comment.remove();
  res.status(200).json({ success: true });
});
