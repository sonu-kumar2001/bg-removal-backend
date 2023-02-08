const activityService = require("../service/activity.service");

const activityControler = {
  async getActivityDetails(req, res) {
    try {
      const response = await activityService.getActivityDetail();
      res.status(200).json({
        activity: response,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Something went wrong!" });
    }
  },
};

module.exports = activityControler;
