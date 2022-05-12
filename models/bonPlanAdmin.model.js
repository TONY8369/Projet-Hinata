const mongoose = require("mongoose");

const PostBonPlanSchema = new mongoose.Schema(
  {
    planId: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    plan: {
      type: String,
      trim: true,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bonPlanAdmin", PostBonPlanSchema);
