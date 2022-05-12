const mongoose = require("mongoose");

const noteUserSchema = new mongoose.Schema(
  {
    noteId: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    note: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("noteUser", noteUserSchema);
