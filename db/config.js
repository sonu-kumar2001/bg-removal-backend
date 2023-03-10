const mongoose = require("mongoose");

module.exports = {
  connect: () => {
    mongoose.connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          require("../utils/seed"),
          console.log("MongoDB connected");
        }
      }
    );
  },
};
