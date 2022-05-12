const EventAdminModel = require("../models/eventAdmin.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readEvent = (req, res) => {
  EventAdminModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  }).sort({ createdAt: -1 });
};

module.exports.createEvent = async (req, res) => {
  const newEvent = new EventAdminModel({
    eventId: req.body.eventId,
    nom: req.body.nom,
    evenement: req.body.evenement,
  });
  try {
    const event = await newEvent.save();
    return res.status(201).json(event);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.updateEvent = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  const updatedRecord = {
    nom: req.body.nom,
    evenement: req.body.evenement,
  };

  EventAdminModel.findOneAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log(" Update error : " + err);
    }
  );
};

module.exports.deleteEvent = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  EventAdminModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};
