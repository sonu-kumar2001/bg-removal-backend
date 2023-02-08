const { removeBackgroundFromImageFile } = require("remove.bg");

const backgroundService = {
  async backgroundRemoval(inputPath) {
    try {
      const outputFile = `./public/nobg/${Date.now()}-no-bg.png`;
      await removeBackgroundFromImageFile({
        path: inputPath,
        apiKey: process.env.APIKEY,
        size: "regular",
        type: "auto",
        outputFile,
      });
      return outputFile;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = backgroundService;
