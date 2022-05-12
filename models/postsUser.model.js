const mongoose = require("mongoose");

const PostUserSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true,
    },
    pseudo: {
      type: String,
      trim: true,
      maxlength: 200,
    },
    message: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    likers: {
      type: [String],
      required: true,
    },
    comments: {
      type: [
        {
          commenterId: String,
          commenterPseudo: String,
          text: String,
          timestamp: Number,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("postUser", PostUserSchema);
