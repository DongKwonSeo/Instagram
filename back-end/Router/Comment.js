const express = require("express");
const {
  createComment,
  getsComments,
  getComment,
  putComment,
} = require("../Controller/Comment");
const router = express.Router();

router.post("/", createComment);
router.get("/", getsComments);
router.get("/:id", getComment);
router.put("/:id", putComment);

module.exports = router;
