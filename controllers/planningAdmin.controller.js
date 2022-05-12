const PlanningModel = require("../models/planning.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readPlanning = (req, res) => {
  PlanningModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  }).sort({ createdAt: -1 });
};

module.exports.createPlanning = async (req, res) => {
  const newPlanning = new PlanningModel({
    planningId: req.body.planningId,
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
  });
  try {
    const planning = await newPlanning.save();
    return res.status(201).json(planning);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.updatePlanning = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  const updatedRecord = {
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
  };

  PlanningModel.findOneAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log(" Update error : " + err);
    }
  );
};

module.exports.deletePlanning = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  PlanningModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};
