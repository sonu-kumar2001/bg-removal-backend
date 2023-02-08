const backgroundService = require("../service/background.service");
const activityService = require("../service/activity.service");

const backgroundController = {
  uploadAndRemoveBackground: async (req, res) => {
    try {
      const bgRemove = await backgroundService.backgroundRemoval(req.file.path);
      if (bgRemove) {
        await activityService.createActivity({
          email: req.user.email,
          upload: true,
        });
      }
      res.status(200).json({
        originalImg: req.file.path,
        bgRemove,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Something went wrong",
      });
    }
  },
};

module.exports = backgroundController;
