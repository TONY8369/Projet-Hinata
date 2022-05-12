import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommentReservation } from "../../actions/reservationUser.action";
import { timestampParser } from "./Utils";

const CommentReservation = ({ reservation }) => {
  const dispatch = useDispatch();
  const reservationUser = useSelector((state) => state.reservationUserReducer);
  return (
    <div className="conteneur-comment">
      <p className="comment" style={{ textTransform: "uppercase" }}>
        {reservation.commenterPseudo}
      </p>
      <p className="dateComment" style={{ textTransform: "uppercase" }}>
        {timestampParser(reservation.timestamp)}
      </p>
      <p className="messageComment">{reservation.text}</p>
      <div className="deleteComment">
        <img
          className="deletecomment"
          onClick={() => {
            if (window.confirm("Voulez vous supprimer ce commentaire ?")) {
              dispatch(
                deleteCommentReservation(
                  reservationUser[0]._id,
                  reservation._id
                )
              );
            }
          }}
          src={`${require("../../image/location/delete.png")}`}
          alt="delete"
        />
      </div>
    </div>
  );
};

export default CommentReservation;
