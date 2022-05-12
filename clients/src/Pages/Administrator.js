import React from "react";
import Titre from "../Components/Titre";
import { Chart, ArcElement, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ReservationPosts from "../Components/ReservationPosts";
import CommentairePosts from "../Components/CommentairePosts";
import FormulaireEvenement from "../Components/FormulaireEvenement";
import FormulaireBonplan from "../Components/FormulaireBonplan";
import Planning from "../Components/Planning";
import MenuAdministrateur from "../Components/MenuAdministrateur";
import { useSelector } from "react-redux";
import ConteneurNote from "../Components/ConteneurNote";
import CommandeUsers from "../Components/log/CommandeUsers";
Chart.register(ArcElement);
Chart.register(...registerables);

const Administrator = () => {
  const adminData = useSelector((state) => state.adminReducer);
  const data = {
    labels: ["2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Chiffre d'affaire du Hinata sur les différentes années",
        data: [120000, 150000, 170000, 250000],
        backgroundColor: ["red", "white", "green", "violet"],
      },
    ],
  };
  return (
    <main>
      <MenuAdministrateur />
      <Titre />
      <div className="description-container-trois">
        <div className="text-container">
          <h2 className="titre-description">
            Bienvenue {adminData.pseudo} à la partie administrateur de votre
            site, Le Hinata
          </h2>
          <p className="text">
            Dans cette partie <span>administrateur, {adminData.pseudo}</span>{" "}
            vous avez à l'aide d'un <span>graphique</span> l'activité lié à
            votre restaurant, vous recevez toute les <span>réservations</span>{" "}
            éffectué sur votre site en <span>temps réel</span> , ainsi que les{" "}
            <span>commentaires</span> de nos utilisateurs. Vous pouvez aussi{" "}
            <span>mèttre à jour</span>, les <span>évènements</span> lié à votre
            restaurant et les <span>bons plans</span> que vous éffectué . Et
            pour terminer vous avez accés au <span>planning du personnel</span>{" "}
            .
          </p>
        </div>
      </div>
      <span className="separator"></span>
      <h1 className="titre-like">Le Hinata ces dernière année !</h1>
      <div className="container-graphique">
        <div className="card-graphique">
          <Bar data={data} />
        </div>
      </div>
      <span className="separator"></span>
      <h1 className="titre-like">Voici les dernières reservations reçus !</h1>
      <ReservationPosts />
      <span className="separator"></span>
      <h1 className="titre-like">Voici les dernières commandes reçus !</h1>
      <CommandeUsers />
      <span className="separator"></span>
      <h1 className="titre-like">Voici les dernières commentaires reçus !</h1>
      <CommentairePosts />
      <span className="separator"></span>
      <h1 className="titre-like">Voici les notes des utilisateurs !</h1>
      <ConteneurNote />
      <span className="separator"></span>
      <h1 className="titre-like">Voici votre formulaire des évènements !</h1>
      <FormulaireEvenement />
      <span className="separator"></span>
      <h1 className="titre-like">Voici votre formulaire des Bons plans !</h1>
      <FormulaireBonplan />
      <span className="separator"></span>
      <h1 className="titre-like">Voici le planning de votre entreprise !</h1>
      <Planning />
    </main>
  );
};

export default Administrator;
