import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Adresse = () => {
  return (
    <div>
      {" "}
      <CopyToClipboard text="Les Cabanes 83470 Pourcieux" className="hover">
        <p
          style={{ cursor: "pointer" }}
          className="clipboard"
          onClick={() => {
            alert("adresse copié !");
          }}
        >
          <img
            className="telephone"
            src={`${require("../image/contact/adresse.png")}`}
            alt="telephone"
          />
          <p className="phone">Lieu-dit Les Cabanes 83470 Pourcieux</p>
        </p>
      </CopyToClipboard>
    </div>
  );
};

export default Adresse;
