// n84cmCWWhE7BUUrDSwY8DMAx api key
const { removeBackgroundFromImageFile } = require("remove.bg");

const backgroundService = {
  async backgroundRemoval(inputPath) {
    try {
      const outputFile = `./public/nobg/${Date.now()}-no-bg.png`;
      await removeBackgroundFromImageFile({
        path: inputPath,
        apiKey: "n84cmCWWhE7BUUrDSwY8DMAx",
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
