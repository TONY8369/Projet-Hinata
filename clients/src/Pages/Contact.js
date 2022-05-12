import React from "react";
import ContactFormulaire from "../Components/ContactFormulaire";
import Menu from "../Components/Menu";
import Titre from "../Components/Titre";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <main>
      <Menu />
      <Titre />
      <div className="description-container">
        <div className="text-container">
          <h2 className="titre-description">
            Voici la zone ou notre restaurant peut vous livrer et si vous
            souhaiter nous contacter , Le Hinata
          </h2>
          <p className="text">
            Voici les différentes <span>villes</span> ou notre service de{" "}
            <span>livraison</span> peut intervenir, et ainsi vous faire profiter
            de nos <span>spécialités</span> , alors n'hésiter plus !! Pour tout
            autre demande veuillez nous contacter soit à travers notre{" "}
            <span>formulaire de contact</span> ci-dessous ou par{" "}
            <span>téléphone</span> .
          </p>
        </div>
      </div>
      <div className="Conteneur-Contact">
        <div className="zone-intervention">
          <div className="intervention1">
            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center2">Saint-Maximin-la-Sainte-Baume</div>
            </p>
            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center3"> Pourcieux</div>
            </p>
            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center4">Seillons-Source-d'Argens</div>
            </p>

            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center5">Tourves</div>
            </p>

            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center6">Pourrières</div>
            </p>

            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center7">Trets</div>
            </p>

            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center8">Rians</div>
            </p>
          </div>
          <div className="intervention2">
            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center9">Rougiers</div>
            </p>

            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center10">Bras</div>
            </p>

            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center11">Brue-Auriac</div>
            </p>

            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center12">Nans-les-Pins</div>
            </p>

            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center13">Ollières</div>
            </p>

            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center14">Brignoles</div>
            </p>

            <p className="locationVille">
              <img
                className="photoLocation"
                src={`${require("../image/location/location2.png")}`}
                alt="maki"
              />
              <div className="text-center15">Rousset</div>
            </p>
          </div>
        </div>
        <ContactFormulaire />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
