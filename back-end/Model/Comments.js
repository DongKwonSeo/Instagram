const mongoose = require("mongoose");
const getCurrentDate = require("../util/CurrentTime");
const commentSchema = new mongoose.Schema(
  {
    content: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "content_model",
      required: [true, "cotnent Id는 필수입니다."],
    },
    content_model: {
      type: String,
      required: true,
      enum:["contents","comments"],
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
commentSchema.virtual("replys", {
  ref: "comments",
  localField: "_id",
  foreignField: "content",
  justOne: false,
});
module.exports = mongoose.model("comments", commentSchema);
