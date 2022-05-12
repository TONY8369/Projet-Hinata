const router = require("express").Router();
const postUserController = require("../controllers/postUser.controller");

router.get("/", postUserController.readPost);
router.post("/", postUserController.createPost);
router.put("/:id", postUserController.updatePost);
router.delete("/:id", postUserController.deletePost);
router.patch("/like-post/:id", postUserController.likePost);
router.patch("/unlike-post/:id", postUserController.unlikePost);

// commentaire //
router.patch("/comment-post/:id", postUserController.commentPost);
router.patch("/edit-comment-post/:id", postUserController.editCommentPost);
router.patch("/delete-comment-post/:id", postUserController.deleteCommentPost);

module.exports = router;
