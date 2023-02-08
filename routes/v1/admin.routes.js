const express = require("express");
const router = express.Router();
const activityController = require("../../controllers/activity.controller");
const auth = require("./authentication/authenticate");

router.get(
  "/activity/details",
  auth.verifyToken,
  activityController.getActivityDetails
);

module.exports = router;
