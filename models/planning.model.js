const mongoose = require("mongoose");

const PostPlanningAdminSchema = new mongoose.Schema(
  {
    planningId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("planningAdmin", PostPlanningAdminSchema);
