const noteUserModel = require("../models/noteUser.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.readNote = (req, res) => {
  noteUserModel
    .find((err, docs) => {
      if (!err) res.send(docs);
      else console.log("Error to get data : " + err);
    })
    .sort({ createdAt: -1 });
};

module.exports.createNote = async (req, res) => {
  const newNote = new noteUserModel({
    noteId: req.body.noteId,
    nom: req.body.nom,
    note: req.body.note,
  });
  try {
    const note = await newNote.save();
    return res.status(201).json(note);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.updateNote = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  const updatedRecord = {
    nom: req.body.nom,
    note: req.body.note,
  };

  noteUserModel.findOneAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log(" Update error : " + err);
    }
  );
};

module.exports.deleteNote = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  noteUserModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};
