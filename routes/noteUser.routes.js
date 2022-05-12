const router = require("express").Router();
const noteUserController = require("../controllers/noteUser.controller");

router.get("/", noteUserController.readNote);
router.post("/", noteUserController.createNote);
router.put("/:id", noteUserController.updateNote);
router.delete("/:id", noteUserController.deleteNote);

module.exports = router;
