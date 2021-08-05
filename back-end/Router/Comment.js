const express = require("express");
const { createComment } = require("../Controller/Comment");
const router = express.Router();

router.post("/", createComment);

module.exports = router;
