const mongoose = require("mongoose");

const PayementUserSchema = new mongoose.Schema(
  {
    payementId: {
      type: String,
      trim: true,
    },
    nom: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    prenom: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    adresse: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    telephone: {
      type: Number,
      trim: true,
      maxlength: 500,
    },
    liste: {
      type: Array,
      trim: true,
      maxlength: 1000,
    },
    amount: {
      type: Number,
      trim: true,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("payementUser", PayementUserSchema);
