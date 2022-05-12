import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  deletePost,
  getPosts,
} from "../../actions/postUser.action";
import { timestampParser } from "./Utils";

const PostUser = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editResponce, setEditResponce] = useState(post.message);
  const responceSuccess = document.querySelector(".success.responce");
  const adminData = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();
    if (editResponce) {
      dispatch(
        addComment(post._id, adminData._id, editResponce, adminData.pseudo)
      )
        .then(() => dispatch(getPosts()))
        .then(() => setEditResponce(""));
      setEditToggle(false);
      responceSuccess.innerHTML = "Message Envoyé !";
    }
    setTimeout(() => {
      responceSuccess.innerHTML = "";
    }, 1000);
  };

  return (
    <div>
      <div className="conteneur-card-user">
        <p className="posts" style={{ textTransform: "uppercase" }}>
          {post.pseudo}
        </p>
        <p className="datePosts" style={{ textTransform: "uppercase" }}>
          {timestampParser(post.createdAt)}
        </p>
        {editToggle ? (
          <>
            <form className="responceAdmin" onSubmit={(e) => handleComment(e)}>
              <textarea
                className="textAdmin"
                resize="none"
                onChange={(e) => setEditResponce(e.target.value)}
                value={editResponce}
              ></textarea>
              <input className="envoyerAdmin" type="submit" value="Envoyer" />
            </form>
            <img
              className="repondrePostDeux"
              onClick={() => setEditToggle(!editToggle)}
              src={`${require("../../image/location/repondre.png")}`}
              alt="repondre"
            />
          </>
        ) : (
          <>
            <p className="messagePosts">{post.message}</p>
            <div className="edit-delete">
              <img
                className="repondrePost"
                onClick={() => setEditToggle(!editToggle)}
                src={`${require("../../image/location/repondre.png")}`}
                alt="repondre"
              />
              <div className="success responce"></div>
              <img
                className="deletePost"
                onClick={() => dispatch(deletePost(post._id))}
                src={`${require("../../image/location/delete.png")}`}
                alt="delete"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostUser;
