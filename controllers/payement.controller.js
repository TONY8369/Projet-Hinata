const PayementModel = require("../models/payement.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readPayement = (req, res) => {
  PayementModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  }).sort({ createdAt: -1 });
};

module.exports.createPayement = async (req, res) => {
  const newPayement = new PayementModel({
    paiementId: req.body.paimentId,
    nom: req.body.nom,
    prenom: req.body.prenom,
    adresse: req.body.adresse,
    telephone: req.body.telephone,
    liste: req.body.liste,
    amount: req.body.amount,
  });
  try {
    const payement = await newPayement.save();
    return res.status(201).json(payement);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.deletePayement = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  PayementModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};
