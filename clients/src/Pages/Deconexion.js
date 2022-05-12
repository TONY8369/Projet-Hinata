import React from "react";
import Commentaire from "../Components/Commentaire";
import Decoration from "../Components/Decoration";
import Evenement from "../Components/Evenement";
import LikeImage from "../Components/LikeImage";
import MenuDeux from "../Components/MenuDeux";
import Reservation from "../Components/Reservation";
import Titre from "../Components/Titre";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import CommentaireReservation from "../Components/log/CommentaireReservation";

const Deconexion = () => {
  const userData = useSelector((state) => state.userReducer);
  return (
    <main>
      <MenuDeux />
      <Titre />
      <div className="description-container-deux">
        <div className="text-container">
          <h2
            className="titre-description"
            style={{ textTransform: "uppercase" }}
          >
            BRAVO et bienvenue {userData.pseudo} dans votre espace de connexion
            , Le Hinata
          </h2>
          <p className="text">
            Vous pouvez consulter les <span>évènements</span> liées à notre
            restaurant , laisser des <span>commentaires</span> ,{" "}
            <span>liker</span> nos plats et profiter de notre système de{" "}
            <span>reservation personalisé</span> ....
          </p>
        </div>
      </div>
      <Decoration />
      <span className="separator"></span>
      <Evenement />
      <span className="separator"></span>
      <Commentaire />
      <span className="separator"></span>
      <h1 className="titre-like">Voter pour nos meilleurs plats</h1>
      <LikeImage />
      <span className="separator"></span>
      <h1 className="titre-like">Reservation personnalisé</h1>
      <Reservation />
      <div className="Explication-reservation">
        <p className="explication">
          Cliquez sur le numero de table que vous souhaitez réserver ci-dessus
          et suivez les instructions pour réserver , pour toute autre question
          nous contacter par formulaire ou téléphone.
        </p>
        <p className="explication">
          Service du midi 11h30 à 14h . Service de nuit 19h à 21h et de 21h à
          23h .
        </p>
        <span className="explication-un">Table 4 à 6</span>
        <span className="explication-deux">Table 2 à 4</span>
        <span className="explication-trois">Table 6 à 8</span>
      </div>
      <span className="separator"></span>
      <h1 className="titre-like">Reponse à vos réservation</h1>
      <CommentaireReservation />
      <span className="separator"></span>
      <Footer />
    </main>
  );
};

export default Deconexion;
