const Contents = require("../Model/Content");
const ErrorResponse = require("../util/errorResponse");
const asyncHandler = require("../middleware/async");
const getCurrentDate = require("../util/CurrentTime");
const fs = require("fs");
const path = require("path");

/** Content Controller */

/**
 * @desc : Create Content
 * @route : POST /api/content
 * @access : public
 */
exports.createContent = asyncHandler(async (req, res, next) => {
  const { user_nickname, text } = req.body;
  const file = req.file;
  const content = await Contents.create({
    user_nickname: user_nickname,
    text: text,
    image: file.filename,
  });
  content.image = `${process.env.IMG_SERVER}${content.image}`;
  res.status(200).json({
    success: true,
    content: content,
  });
});

/**
 * @desc : All Content
 * @route : Get /api/content
 * @access : public
 */
exports.GetsContent = asyncHandler(async (req, res, next) => {
  const temp = await Contents.find().populate({
    path: "comments",
    populate: {
      path: "replys",
      populate: {
        path: "replys",
      },
    },
  });

  const contents = temp.map((content) => {
    content.image = `${process.env.IMG_SERVER}${content.image}`;
    return content;
  });

  res.status(200).json({
    success: true,
    contents: contents,
  });
});
/**
 * @desc : One Get Content
 * @route : Get /api/content/:id
 * @access : public
 */
exports.GetContent = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const content = await Contents.findById(id).populate({
    path: "comments",
    populate: {
      path: "replys",
      populate: {
        path: "replys",
      },
    },
  });

  content.image = `${process.env.IMG_SERVER}${content.image}`;
  res.status(200).json({
    success: true,
    content: content,
  });
});

/**
 * @desc : One Update Content
 * @route : PUT /api/content/:id
 * @access : public
 */
exports.PutContent = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { user_nickname, text } = req.body;
  const file = req.file;
  const content = await Contents.findById(id).populate({ path: "comments" });

  if (user_nickname != content.user_nickname) {
    return next(new ErrorResponse("해당 글의 소유자가 아닙니다.", 403));
  }

  content.text = text;
  content.user_nickname = user_nickname;
  content.updatedAt = getCurrentDate("currentTime");
  if (file) {
    fs.unlink(`./public/upload/${content.image}`, (err) => {
      if (err) {
        console.log("파일 삭제 Error 발생");
      }
    });
    content.image = file.filename;
  }

  await content.save();
  content.image = `${process.env.IMG_SERVER}${content.image}`;
  res.status(200).json({
    success: true,
    content: content,
  });
});
/**
 * @desc : One Delete Content
 * @route : delete /api/content/:id/:user_nickname
 * @access : public
 */
exports.DeleteContent = asyncHandler(async (req, res, next) => {
  const { id, user_nickname } = req.params;
  const content = await Contents.findById(id);
  if (user_nickname != content.user_nickname) {
    return next(new ErrorResponse("해당 글의 소유자가 아닙니다.", 403));
  }
  fs.unlink(`./public/upload/${content.image}`, (err) => {
    if (err) {
      console.log("파일 삭제 Error 발생");
    }
  });
  content.remove();
  res.status(200).json({
    success: true,
  });
});

/**
 * @desc : One Content Like
 * @route : put /api/content/:id/like
 * @access : public
 */
exports.LikeContent = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const content = await Contents.findById(id);
  content.like = content.like + 1;
  await content.save();
  content.image = `${process.env.IMG_SERVER}${content.image}`;
  res.status(200).json({
    success: true,
    content: content,
  });
});
