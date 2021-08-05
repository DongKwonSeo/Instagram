const express = require("express");
const { createComment, getsComments } = require("../Controller/Comment");
const router = express.Router();

router.post("/", createComment);
router.get("/", getsComments);
module.exports = router;
