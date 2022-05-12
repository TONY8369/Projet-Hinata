const router = require("express").Router();
const payementController = require("../controllers/payement.controller");

router.get("/", payementController.readPayement);
router.post("/", payementController.createPayement);
router.delete("/:id", payementController.deletePayement);

module.exports = router;
