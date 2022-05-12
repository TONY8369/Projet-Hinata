const mongoose = require("mongoose");
// controler l'email avec isEmail et validator //
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

// play function before save into display: 'block',
// on sale le mot de passe pour qu'il soit cripté //
adminSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
// on verifie que le mot de passe de la base de donnée et identique ou non au mot de passe rentré avec email //
adminSchema.statics.login = async function (email, password) {
  const admin = await this.findOne({ email });
  if (admin) {
    const auth = await bcrypt.compare(password, admin.password);
    if (auth) {
      return admin;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = AdminModel;
