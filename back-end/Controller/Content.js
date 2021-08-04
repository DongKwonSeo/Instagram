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

// fs.unlink("./smple2.txt", err => {

//   if(err.code == 'ENOENT'){
//       console.log("파일 삭제 Error 발생");
//   }
// });
