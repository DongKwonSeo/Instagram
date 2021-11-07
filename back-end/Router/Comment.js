const express = require("express");
const {
  createComment,
  getsComments,
  getComment,
  putComment,
  deleteComment,
  createDespComment,
} = require("../Controller/Comment");
const router = express.Router();

router.post("/", createComment);
router.get("/", getsComments);
router.post("/comment", createDespComment);
router.get("/:id", getComment);
router.put("/:id", putComment);

router.delete("/:id/:user_nickname", deleteComment);
module.exports = router;
