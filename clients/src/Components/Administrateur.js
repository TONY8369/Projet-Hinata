import React from "react";
import { NavLink } from "react-router-dom";

const administrator = () => {
  return (
    <div className="administrator">
      <NavLink
        to="/connexionAdmin"
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        <img
          className="administrateur"
          src={`${require("../image/contact/administrateur2.png")}`}
          alt="administrateur"
        />
        <p className="administrateur2">AD</p>
      </NavLink>
    </div>
  );
};

export default administrator;
