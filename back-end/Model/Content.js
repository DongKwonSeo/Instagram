const mongoose = require("mongoose");
const getCurrentDate = require("../util/CurrentTime");
const ContentSchema = new mongoose.Schema(
  {
    user_nickname: {
      type: String,
      required: [true, "유저 닉네임은 필수입니다."],
    },
    image: {
      type: String,
      required: [true, "게시글 이미지는 필수입니다."],
    },

    text: {
      type: String,
      required: [true, "게시글은 필수입니다."],
    },
    like: {
      type: Number,
      default: 0,
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

ContentSchema.pre("remove", async function (next) {
  await this.model("comments").deleteMany({
    content: this._id,
  });
  next();
});
module.exports = mongoose.model("contents", ContentSchema);
