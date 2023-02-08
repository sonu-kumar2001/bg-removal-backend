const ActivityDetails = require("../activity/Activity.model");

module.exports = {
  createActivity: async (activityObj) => {
    try {
      const activity = new ActivityDetails({
        email: activityObj.email,
        upload: activityObj.upload,
      });
      const response = await activity.save();
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  getActivityDetails: async () => {
    try {
      const getActivityDetail = ActivityDetails.find({});
      return getActivityDetail;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};
