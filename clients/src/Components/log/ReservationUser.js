import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentReservation,
  deleteReservation,
  getReservations,
} from "../../actions/reservationUser.action";
import { timestampParsers } from "./Utils";

const ReservationUser = ({ reservation }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editResponce, setEditResponce] = useState(reservation.message);
  const responceSuccess = document.querySelector(".success.responce");
  const adminData = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();
    if (editResponce) {
      dispatch(
        addCommentReservation(
          reservation._id,
          adminData._id,
          editResponce,
          adminData.pseudo
        )
      )
        .then(() => dispatch(getReservations()))
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
      <div className="conteneur-reservation-user">
        <p className="reservations" style={{ textTransform: "uppercase" }}>
          Nom / {reservation.name}
        </p>
        <p className="dateReservations" style={{ textTransform: "uppercase" }}>
          Date / {timestampParsers(reservation.date)}
        </p>
        <p className="dateReservations" style={{ textTransform: "uppercase" }}>
          {reservation.time}H
        </p>
        <p className="dateReservations" style={{ textTransform: "uppercase" }}>
          Table:{reservation.number}
        </p>
        {editToggle ? (
          <>
            <form className="responceAdmin" onSubmit={(e) => handleComment(e)}>
              <textarea
                className="responseAdmin"
                resize="none"
                onChange={(e) => setEditResponce(e.target.value)}
                value={editResponce}
              ></textarea>
              <input className="envoyersAdmin" type="submit" value="Envoyer" />
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
            <p className="messageReservations">{reservation.message}</p>

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
                onClick={() => dispatch(deleteReservation(reservation._id))}
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

export default ReservationUser;
