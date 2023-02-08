const activityModel = require("../models/activity/dml");

const activityService = {
  async createActivity(activityObj) {
    const response = await activityModel.createActivity(activityObj);
    return response;
  },
  async getActivityDetail() {
    const response = await activityModel.getActivityDetails();
    return response;
  },
};

module.exports = activityService;
