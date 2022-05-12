import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReservationUser from "./log/ReservationUser";
import { isEmpty } from "./log/Utils";

const ReservationPosts = () => {
  const reservationUser = useSelector((state) => state.reservationUserReducer);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container-posts">
      <div className="posts-reservation">
        {isOpen ? (
          <>
            <button
              className="lmj-cart-toggle-button-deux"
              onClick={() => setIsOpen(false)}
            >
              Fermer l'espace reservation
            </button>

            {!isEmpty(reservationUser) &&
              reservationUser.map((reservation, index) => (
                <ReservationUser reservation={reservation} key={index} />
              ))}
          </>
        ) : (
          <button
            className="lmj-cart-toggle-button-deux"
            onClick={() => setIsOpen(true)}
          >
            Ouvrir l'espace reservation
          </button>
        )}
      </div>
    </div>
  );
};

export default ReservationPosts;
