const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

// auth user //
module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        //res.cookie("jwt", "", { maxAge: 1 });
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.send(200).json("no token");
      } else {
        let user = await UserModel.findById(decodedToken.id);
        res.locals.user = user;
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log("No Token");
  }
};

module.exports.payement = async (req, res) => {
  let { amount, id } = req.body;
  console.log("amount & id : ", amount, id);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "EUR",
      description: "Your company description",
      payment_method: id,
      confirm: true,
    });
    res.json({
      message: "Payement réussi",
      success: true,
    });
  } catch (error) {
    console.log("erreur...", error);
    res.json({
      message: "Le payement à échoué",
      success: false,
    });
  }
};
