const jwt = require("jsonwebtoken");
const AdminModel = require("../models/admin.model");

// auth admin //
module.exports.checkAdmin = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.admin = null;
        //res.cookie("jwt", "", { maxAge: 1 });
        next();
      } else {
        let admin = await AdminModel.findById(decodedToken.id);
        res.locals.admin = admin;
        next();
      }
    });
  } else {
    res.locals.admin = null;
    next();
  }
};

module.exports.requireAuthAdmin = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.send(200).json("no token");
      } else {
        let admin = await AdminModel.findById(decodedToken.id);
        res.locals.admin = admin;
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log("No Token");
  }
};
