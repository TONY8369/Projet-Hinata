import React, { useState } from "react";
import { useSelector } from "react-redux";
import CommentReservation from "./CommentReservation";
import { isEmpty } from "./Utils";

const CommentaireReservation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reservationUser = useSelector((state) => state.reservationUserReducer);
  return (
    <div className="reservation-containers">
      {isOpen ? (
        <>
          <button
            className="lmj-cart-toggle-button"
            onClick={() => setIsOpen(false)}
          >
            Fermer l'espace reservation
          </button>

          {!isEmpty(reservationUser) &&
            reservationUser[0].comments.map((reservation, index) => (
              <CommentReservation reservation={reservation} key={index} />
            ))}
        </>
      ) : (
        <button
          className="lmj-cart-toggle-button"
          onClick={() => setIsOpen(true)}
        >
          Ouvrir l'espace reservation
        </button>
      )}
    </div>
  );
};

export default CommentaireReservation;
