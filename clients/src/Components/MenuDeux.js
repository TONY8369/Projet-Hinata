import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./log/Logout";

const MenuDeux = () => {
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
      <NavLink
        to="/connexion"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        <Logout />
      </NavLink>
      <NavLink
        to="/contact"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        <li className="item">CONTACT / LIVRAISON</li>
      </NavLink>
    </div>
  );
};

export default MenuDeux;
