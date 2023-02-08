const express = require("express");
const router = express.Router();
const backgroundController = require("../../controllers/background.controller");
const upload = require("../../utils/multer");

router.post("/upload", upload, backgroundController.uploadAndRemoveBackground);

module.exports = router;
