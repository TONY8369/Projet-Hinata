import React from "react";
import { NavLink } from "react-router-dom";
import LogoutAdmin from "./log/LogoutAdmin";

const MenuAdministrateur = () => {
  return (
    <div className="administrative">
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        <LogoutAdmin />
      </NavLink>
    </div>
  );
};

export default MenuAdministrateur;
