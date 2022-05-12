const mongoose = require("mongoose");

const PostEventAdminSchema = new mongoose.Schema(
  {
    eventId: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    evenement: {
      type: String,
      trim: true,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("eventAdmin", PostEventAdminSchema);
