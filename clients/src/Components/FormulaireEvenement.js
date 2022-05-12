import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, getEvents } from "../actions/eventAdmin.action";

const FormulaireEvenement = () => {
  const [nom, setNom] = useState("");
  const [evenement, setEvenement] = useState("");
  const dispatch = useDispatch();
  const adminData = useSelector((state) => state.adminReducer);
  const evenementSuccess = document.querySelector(".success.evenement");

  const handleEvent = async (e) => {
    e.preventDefault();

    if (nom && evenement) {
      const data = {
        eventId: adminData._id,
        nom,
        evenement,
      };
      await dispatch(addEvent(data));
      setNom("");
      setEvenement("");
      dispatch(getEvents());
      evenementSuccess.innerHTML = "Evenement Envoyé !";
    } else {
      evenementSuccess.innerHTML = "Echec de l'envoi";
    }
    setTimeout(() => {
      evenementSuccess.innerHTML = "";
    }, 1000);
  };

  return (
    <form className="form-event" onSubmit={handleEvent}>
      <h2 className="title-content">Evènement Hinata</h2>
      <div className="event-content">
        <input
          className="input-event"
          type="text"
          id="nom"
          name="nom"
          placeholder="nom *"
          autoComplete="off"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <textarea
          id="evenement"
          name="evenement"
          placeholder="evenement *"
          value={evenement}
          onChange={(e) => setEvenement(e.target.value)}
        />
      </div>
      <input className="buttonContact" type="submit" value="Envoyer" />
      <div className="success evenement"></div>
    </form>
  );
};

export default FormulaireEvenement;
