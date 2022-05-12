const router = require("express").Router();
const bonPlanAdminController = require("../controllers/bonPlanAdmin.controller");

router.get("/", bonPlanAdminController.readBonplan);
router.post("/", bonPlanAdminController.createBonplan);
router.put("/:id", bonPlanAdminController.updateBonplan);
router.delete("/:id", bonPlanAdminController.deleteBonplan);

module.exports = router;
