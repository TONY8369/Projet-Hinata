const mongoose = require("mongoose");

const PostReservationUserSchema = new mongoose.Schema(
  {
    reservationId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      maxlength: 100,
    },
    number: {
      type: Number,
      maxlength: 20,
      required: true,
    },
    date: {
      type: Date,
      maxlength: 20,
      required: true,
    },
    time: {
      type: String,
      maxlength: 20,
      required: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: 500,
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

module.exports = mongoose.model("reservationUser", PostReservationUserSchema);
