const backgroundService = require("../service/background.service");

const backgroundController = {
  uploadAndRemoveBackground: async (req, res) => {
    try {
      const bgRemove = await backgroundService.backgroundRemoval(req.file.path);
      res.status(200).json({
        originalImg: req.file.path,
        bgRemove,
      });
    } catch(error) {
      console.log(error);
      return res.status(500).json({
        error: "Something went wrong",
      });
    }
  },
};

module.exports = backgroundController;
