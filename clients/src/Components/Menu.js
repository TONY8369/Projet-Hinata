import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import { useSelector } from "react-redux";

const Menu = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  return (
    <div className="menu">
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        <li className="item">LE HINATA</li>
      </NavLink>
      <NavLink
        to="/carte"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        <li className="item">CARTE</li>
      </NavLink>
      {uid ? (
        <NavLink
          to="/deconnexion"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <li className="item" style={{ textTransform: "uppercase" }}>
            COMPTE DE {userData.pseudo}
          </li>
        </NavLink>
      ) : (
        <NavLink
          to="/connexion"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <li className="item">ME CONNECTER / M'INSCRIRE</li>
        </NavLink>
      )}
      <NavLink
        to="/contact"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        <li className="item">CONTACT / LIVRAISON</li>
      </NavLink>
    </div>
  );
};

export default Menu;
