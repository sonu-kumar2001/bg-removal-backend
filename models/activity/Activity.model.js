const mongoose = require("mongoose");

const { Schema } = mongoose;

const activityDetails = new Schema(
  {
    email: { type: String, required: true },
    upload: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ActivityDetails", activityDetails);
