import React from "react";

const Titre = () => {
  return (
    <div className="titre">
      <img
        className="logoRestaurant"
        src={`${require("../image/PROJET le HINATA/inspi/LE HINATA-logo01.png")}`}
        alt="like"
      />
      <p className="horraire">
        Du mardi au dimanche de 11h30 à 15h et de 19h à 23h30
      </p>
      <span></span>
    </div>
  );
};

export default Titre;
