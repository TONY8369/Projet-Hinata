import React from "react";

const Decoration = () => {
  return (
    <div className="deco-container">
      <div className="deco-un">
        <img
          className="hinataTrois"
          src={`${require("../image/Restaurant-asiatique-à-Pourcieux,-Le-Hinata3.jpg")}`}
          alt="hinata3"
        />
      </div>
      <div className="deco-deux">
        <img
          className="hinataUn"
          src={`${require("../image/Restaurant-asiatique-à-Pourcieux,-Le-Hinata1.jpg")}`}
          alt="hinata1"
        />
      </div>
      <div className="deco-trois">
        <img
          className="hinataDeux"
          src={`${require("../image/Restaurant-asiatique-à-Pourcieux,-Le-Hinata2.jpg")}`}
          alt="hinata2"
        />
      </div>
      <div className="deco-quatre">
        <img
          className="hinataQuatre"
          src={`${require("../image/Restaurant-asiatique-à-Pourcieux,-Le-Hinata4.jpg")}`}
          alt="hinata4"
        />
      </div>
    </div>
  );
};

export default Decoration;
