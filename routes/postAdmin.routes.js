const router = require("express").Router();
const postAdminController = require("../controllers/postAdmin.controller");

router.get("/", postAdminController.readPost);
router.post("/", postAdminController.createPost);
router.put("/:id", postAdminController.updatePost);
router.delete("/:id", postAdminController.deletePost);
router.patch("/like-post/:id", postAdminController.likePost);
router.patch("/unlike-post/:id", postAdminController.unlikePost);

// commentaire //
router.patch("/comment-post/:id", postAdminController.commentPost);
router.patch("/edit-comment-post/:id", postAdminController.editCommentPost);
router.patch("/delete-comment-post/:id", postAdminController.deleteCommentPost);

module.exports = router;
