import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Panier = ({ cart, updateCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickPanier = () => {
    setIsOpen(!isOpen);
  };

  const total = cart.reduce(
    (acc, listePlats) => acc + listePlats.amount * listePlats.price,
    0
  );
  const arrondi = Math.round(total * 100) / 100;

  const prix = [arrondi];
  console.log(prix);

  let url = new URL(`https:/localhost:3001/facturation?prix=${prix}`);
  console.log(url.search);

  return (
    <div>
      <p className="panierUn">
        <img
          onClick={onClickPanier}
          className="logoPanier"
          src={`${require("../image/panier/panier.png")}`}
          alt="panier"
        />
        <div className="text-center">PANIER</div>
        <div className={`panier ${isOpen ? "panier-active" : ""}`}>
          <p className="commandez">Votre Commande:</p>
          <p className="liste-commande">
            {cart.map(({ cover, price, amount }, index) => (
              <div key={`${cover}-${index}`}>
                {cover} {price}€ x {amount}
              </div>
            ))}
          </p>
          <p className="TotalCommande">Total:{prix}€</p>
          <NavLink
            prix={prix}
            exact={true}
            to={`/facturation?montant=${prix}`}
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            <button className="validez" type="submit">
              Validez
            </button>
          </NavLink>
          <button className="supprimer" onClick={() => updateCart([])}>
            Annuler
          </button>
        </div>
      </p>
    </div>
  );
};

export default Panier;
