const router = require("express").Router();
const reservationUserController = require("../controllers/reservationUser.controller");

router.get("/", reservationUserController.readReservation);
router.post("/", reservationUserController.createReservation);
router.put("/:id", reservationUserController.updateReservation);
router.delete("/:id", reservationUserController.deleteReservation);

// commentaire //
router.patch(
  "/comment-reservation/:id",
  reservationUserController.commentReservation
);
router.patch(
  "/edit-comment-reservation/:id",
  reservationUserController.editCommentReservation
);
router.patch(
  "/delete-comment-reservation/:id",
  reservationUserController.deleteCommentReservation
);

module.exports = router;
