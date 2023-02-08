const express = require("express");
const router = express.Router();
const activityController = require("../../controllers/activity.controller");

router.get("/activity/details", activityController.getActivityDetails);

module.exports = router;