const router = require("express").Router();
const authAdminController = require("../controllers/authAdmin.controller");
const adminController = require("../controllers/admin.controller");

//authentification admin //
router.post("/register", authAdminController.signUpAdmin);
router.post("/loginAd", authAdminController.signInAdmin);
router.get("/logoutAd", authAdminController.logout);

// administrateur //
router.get("/", adminController.getAllAdmin);
router.get("/:id", adminController.AdminInfo);
router.put("/:id", adminController.updateAdmin);
router.delete("/:id", adminController.deleteAdmin);

module.exports = router;
