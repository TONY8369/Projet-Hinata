import React from "react";
import Administrateur from "../Components/Administrateur";
import Adresse from "./Adresse";
import SocialNetwork from "./SocialNetwork";
import Telephone from "./Telephone";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Telephone />
      </div>
      <div>
        <Adresse />
      </div>
      <div>
        <Administrateur />
      </div>
      <div>
        <SocialNetwork />
      </div>
    </div>
  );
};

export default Footer;
