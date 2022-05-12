import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../actions/postUser.action";
import { timestampParser } from "./Utils";

const CommentAdmin = ({ comment }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postUserReducer);

  return (
    <div className="conteneur-comment">
      <p className="comment" style={{ textTransform: "uppercase" }}>
        {comment.commenterPseudo}
      </p>
      <p className="dateComment" style={{ textTransform: "uppercase" }}>
        {timestampParser(comment.timestamp)}
      </p>
      <p className="messageComment">{comment.text}</p>
      <div className="deleteComment">
        <img
          className="deletecomment"
          onClick={() => {
            if (window.confirm("Voulez vous supprimer ce commentaire ?")) {
              dispatch(deleteComment(posts[0]._id, comment._id));
            }
          }}
          src={`${require("../../image/location/delete.png")}`}
          alt="delete"
        />
      </div>
    </div>
  );
};

export default CommentAdmin;
