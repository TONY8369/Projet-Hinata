import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";

const Telephone = () => {
  return (
    <div className="phone">
      <CopyToClipboard text="0681941192" className="hover">
        <p
          style={{ cursor: "pointer" }}
          className="clipboard"
          onClick={() => {
            alert("Téléphone copié !");
          }}
        >
          <img
            className="telephone"
            src={`${require("../image/contact/phone5.png")}`}
            alt="telephone"
          />
          <p className="phone">04 89 11 37 21</p>
        </p>
      </CopyToClipboard>
    </div>
  );
};

export default Telephone;
