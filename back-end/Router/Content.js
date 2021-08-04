const express = require("express");
const multer = require("multer");
const { createContent, GetsContent } = require("../Controller/Content");

const router = express.Router();
const fileStorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.FILE_UPLOAD_PATH);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now().toString()}-${file.originalname}`);
  },
});

const upload = multer({ storage: fileStorageEngine });

router.post("/", upload.single("image"), createContent);
router.get("/", GetsContent);
module.exports = router;
