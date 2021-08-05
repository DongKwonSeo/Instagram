const mongoose = require("mongoose");
const getCurrentDate = require("../util/CurrentTime");
const commentSchema = new mongoose.Schema(
  {
    content: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "contents",
      required: [true, "cotnent Id는 필수입니다."],
    },
    user_nickname: {
      type: String,
      required: [true, "유저 닉네임은 필수 입니다."],
    },
    comment_text: {
      type: String,
      required: [true, "댓글 텍스트는 필수 입니다."],
    },
    cratedAt: {
      type: Date,
      default: getCurrentDate("currentTime"),
    },
    updatedAt: {
      type: Date,
      default: getCurrentDate("currentTime"),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("comments", commentSchema);
