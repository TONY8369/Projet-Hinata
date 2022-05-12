import React from "react";
import { NavLink } from "react-router-dom";

const Reservation = () => {
  return (
    <div className="reservation-container">
      <div className="bloc-reservation">
        <div className="ensemble">
          <div className="bloc-bar">
            BAR
            <span className="bloc-bar-un">Glace / Sodas</span>
            <span className="bloc-bar-deux">Comptoir</span>
            <span className="bloc-bar-trois">Entrée</span>
          </div>
          <div className="bloc-cuisine">
            CUISINE
            <span className="bloc-cuisine-un">cuisine</span>
            <span className="bloc-cuisine-deux">cuisine</span>
            <span className="bloc-cuisine-quatre">cuisine</span>
            <span className="bloc-cuisine-trois">cuisine</span>
          </div>
          <div className="bloc-salle">
            SALLE
            <span className="bloc-salle-un">
              <NavLink
                to="/formulaireReservation?table=1"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                1
              </NavLink>
            </span>
            <span className="bloc-salle-deux">barrière murale</span>
            <span className="bloc-salle-trois">
              <NavLink
                to="/formulaireReservation?table=2"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                2
              </NavLink>
            </span>
            <span className="bloc-salle-quatre">
              <NavLink
                to="/formulaireReservation?table=3"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                3
              </NavLink>
            </span>
            <span className="bloc-salle-cinq">
              <NavLink
                to="/formulaireReservation?table=4"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                4
              </NavLink>
            </span>
            <span className="bloc-salle-six">
              <NavLink
                to="/formulaireReservation?table=5"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                5
              </NavLink>
            </span>
            <span className="bloc-salle-sept">
              <NavLink
                to="/formulaireReservation?table=6"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                6
              </NavLink>
            </span>
            <span className="bloc-salle-huit">
              <NavLink
                to="/formulaireReservation?table=7"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                7
              </NavLink>
            </span>
            <span className="bloc-salle-neuf">
              <NavLink
                to="/formulaireReservation?table=8"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                8
              </NavLink>
            </span>
            <span className="bloc-salle-dix">
              <NavLink
                to="/formulaireReservation?table=9"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                9
              </NavLink>
            </span>
            <span className="bloc-salle-onze">
              <NavLink
                to="/formulaireReservation?table=10"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                10
              </NavLink>
            </span>
            <span className="bloc-salle-douze">
              <NavLink
                to="/formulaireReservation?table=11"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                11
              </NavLink>
            </span>
            <span className="bloc-salle-treize">
              <NavLink
                to="/formulaireReservation?table=12"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                12
              </NavLink>
            </span>
            <span className="bloc-salle-quatorze">
              {" "}
              <NavLink
                to="/formulaireReservation?table=13"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                13
              </NavLink>
            </span>
            <span className="bloc-salle-quinze">
              <NavLink
                to="/formulaireReservation?table=14"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                14
              </NavLink>
            </span>
            <span className="bloc-salle-seize">
              <NavLink
                to="/formulaireReservation?table=15"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                15
              </NavLink>
            </span>
            <span className="bloc-salle-dixHuit">
              <NavLink
                to="/formulaireReservation?table=16"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                16
              </NavLink>
            </span>
            <span className="bloc-salle-dix-neuf">
              <NavLink
                to="/formulaireReservation?table=17"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                17
              </NavLink>
            </span>
            <span className="bloc-salle-vingth">
              <NavLink
                to="/formulaireReservation?table=18"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                18
              </NavLink>
            </span>
            <span className="bloc-salle-vingth-un">
              <NavLink
                to="/formulaireReservation?table=19"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                19
              </NavLink>
            </span>
            <span className="bloc-salle-vingth-deux">
              <NavLink
                to="/formulaireReservation?table=20"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                20
              </NavLink>
            </span>
            <span className="bloc-salle-vingth-trois">
              <NavLink
                to="/formulaireReservation?table=21"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                21
              </NavLink>
            </span>
            <span className="bloc-salle-vingth-quatre">
              <NavLink
                to="/formulaireReservation?table=22"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                22
              </NavLink>
            </span>
            <span className="bloc-salle-vingth-cinq">
              <NavLink
                to="/formulaireReservation?table=23"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                23
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
