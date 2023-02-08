const express = require("express");
const router = express.Router();
const backgroundController = require("../../controllers/background.controller");
const upload = require("../../utils/multer");
const auth = require("./authentication/authenticate");

router.post(
  "/upload",
  upload,
  auth.verifyToken,
  backgroundController.uploadAndRemoveBackground
);

module.exports = router;
