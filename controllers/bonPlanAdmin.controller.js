const BonPlanAdminModel = require("../models/bonPlanAdmin.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readBonplan = (req, res) => {
  BonPlanAdminModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  }).sort({ createdAt: -1 });
};

module.exports.createBonplan = async (req, res) => {
  const newPlan = new BonPlanAdminModel({
    planId: req.body.planId,
    nom: req.body.nom,
    plan: req.body.plan,
  });
  try {
    const plan = await newPlan.save();
    return res.status(201).json(plan);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.updateBonplan = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  const updatedRecord = {
    nom: req.body.nom,
    plan: req.body.plan,
  };

  BonPlanAdminModel.findOneAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log(" Update error : " + err);
    }
  );
};

module.exports.deleteBonplan = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  BonPlanAdminModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};
