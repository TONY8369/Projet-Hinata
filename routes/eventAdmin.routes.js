const router = require("express").Router();
const eventAdminController = require("../controllers/eventAdmin.controller");

router.get("/", eventAdminController.readEvent);
router.post("/", eventAdminController.createEvent);
router.put("/:id", eventAdminController.updateEvent);
router.delete("/:id", eventAdminController.deleteEvent);

module.exports = router;
