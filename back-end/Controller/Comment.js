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

/**
 * @desc : Select One Comment
 * @route : Get /api/Comment/:id
 * @access : public
 */

/**
 * @desc : Select One Comment Put
 * @route : put /api/Comment/:id
 * @access : public
 */

/**
 * @desc : Select One Comment Delete
 * @route : delete /api/Comment/:id
 * @access : public
 */
