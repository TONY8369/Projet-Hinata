const router = require("express").Router();
const planningAdminController = require("../controllers/planningAdmin.controller");

router.get("/", planningAdminController.readPlanning);
router.post("/", planningAdminController.createPlanning);
router.put("/:id", planningAdminController.updatePlanning);
router.delete("/:id", planningAdminController.deletePlanning);

module.exports = router;
