import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReservation,
  getReservations,
} from "../actions/reservationUser.action";

const FormulaireReservation = () => {
  const table = window.location.search;
  console.log(table);

  const numero = window.location.search.split("?table=").join("");
  console.log(numero);

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState(numero);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const reservationSuccess = document.querySelector(".reservation.success");

  const handleReservation = async (e) => {
    e.preventDefault();

    if (name && number && date && time && message) {
      const data = {
        reservationId: userData._id,
        name,
        number,
        date,
        time,
        message,
      };
      await dispatch(addReservation(data));
      setName("");
      setNumber("");
      setDate("");
      setTime("");
      setMessage("");
      dispatch(getReservations());
      reservationSuccess.innerHTML = "Reservation Envoyé !";
    }
    setTimeout(() => {
      reservationSuccess.innerHTML = "";
      window.location = "/Deconnexion";
    }, 2000);
  };

  return (
    <form className="form-reservation" onSubmit={handleReservation}>
      <h2 className="title-content">Reservation Hinata</h2>
      <div className="event-content">
        <input
          className="input-event"
          type="text"
          id="name"
          name="name"
          placeholder="nom *"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-event"
          type="number"
          id="table"
          name="table"
          placeholder="Numero de table"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          className="input-event"
          type="date"
          id="date"
          name="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          className="input-event"
          type="time"
          id="time"
          name="time"
          min="11:30"
          max="21:00"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <textarea
          id="message"
          name="message"
          placeholder=" Numero de telephone / Adresse mail / Nombre personne / Autre *"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <input className="buttonContact" type="submit" value="Envoyer" />
      <div className="reservation success"></div>
    </form>
  );
};

export default FormulaireReservation;
