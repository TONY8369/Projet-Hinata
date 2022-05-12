import React, { useState } from "react";
import { useSelector } from "react-redux";
import { timestampParser } from "./Utils";

const CommandeUsers = () => {
  const commandeUser = useSelector((state) => state.commandeUserReducer);
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
              Fermer l'espace commandes
            </button>

            <div className="liste-commandeUser">
              <ul>
                {Object.entries(commandeUser).map(([key, value]) => {
                  return (
                    <>
                      <p className="description-commande">
                        <span className="deco">Nom /</span>
                        {value.nom}
                      </p>
                      <p className="description-commande">
                        <span className="deco">Prenom /</span>
                        {value.prenom}
                      </p>
                      <p className="description-commande">
                        <span className="deco">Telephone /</span>0
                        {value.telephone}
                      </p>
                      <p className="description-commande">
                        <span className="deco">Date Commande /</span>
                        {timestampParser(value.createdAt)}
                      </p>
                      <p className="description-commande">
                        <span className="deco">Adresse Livraison /</span>
                        {value.adresse}
                      </p>
                      <p className="description-commande">
                        <span className="deco">Commande /</span>
                        {value.liste}
                      </p>
                      <p className="description-commande">
                        <span className="deco">Règlement /</span>
                        {value.amount}€
                      </p>
                    </>
                  );
                })}
              </ul>
            </div>
          </>
        ) : (
          <button
            className="lmj-cart-toggle-button-deux"
            onClick={() => setIsOpen(true)}
          >
            Ouvrir l'espace commande
          </button>
        )}
      </div>
    </div>
  );
};

export default CommandeUsers;
