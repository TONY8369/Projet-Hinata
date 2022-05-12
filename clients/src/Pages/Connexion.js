import React, { useContext } from "react";
import ConnexionPage from "../Components/ConnexionPage";
import InscriptionPage from "../Components/InscriptionPage";
import Menu from "../Components/Menu";
import Titre from "../Components/Titre";
import Footer from "../Components/Footer";
import { UidContext } from "../Components/AppContext";
import Deconexion from "./Deconexion";

const Connexion = () => {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? (
        <Deconexion />
      ) : (
        <div>
          <Menu />
          <Titre />
          <div className="description-container">
            <div className="text-container">
              <h2 className="titre-description">
                Bienvenue dans votre espace de connexion , Le Hinata
              </h2>
              <p className="text">
                Voici votre espace de <span>connexion</span> qui vous permettra
                d'ètre au coeur de notre restaurant, en vous inscrivant vous
                profiterais de nombreux avantages avec un système de{" "}
                <span>reservation</span>, plus performant et plus{" "}
                <span>personnalisé</span>. Un espace ou vous pourrais donner{" "}
                <span>votre avis</span> sur la , qualité de nos produit. Ou vous
                pourrais cumuler des <span>avantages</span> avec notre systèmes
                de , <span>cagniote</span> pour récompenser votre fidélité et
                avoir un meilleur visuel sur nos nombreux{" "}
                <span>évènements et bon plans</span> de notre restaurant ! Alors
                perdez pas de temps rejoignez-nous ou connecter vous si cela est
                deja fait !!
              </p>
            </div>
          </div>
          <div className="conteneur-connexion">
            <InscriptionPage />
            <div className="choix">
              <span className="spanUn">Inscrivez-vous</span>
              <span className="spanDeux">Ou</span>
              <span className="spanTrois">Connectez-vous si déjà inscrit</span>
            </div>
            <ConnexionPage />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Connexion;
