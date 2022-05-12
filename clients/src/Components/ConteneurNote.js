import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DataImage } from "../data/DataImage";

const ConteneurNote = () => {
  const noteUser = useSelector((state) => state.noteUserReducer);
  const [selectedImg, setSelectedImg] = useState(DataImage[0].img);
  return (
    <div className="container-img-notes">
      <img src={selectedImg} alt="selected" className="selected" />
      <div className="imgContainer">
        {DataImage.map(({ img, index }) => (
          <>
            <img
              className="visibleText"
              style={{ border: selectedImg === img ? "4px solid #eac55e" : "" }}
              key={index}
              src={img}
              alt="plat japonais"
              onClick={() => setSelectedImg(img)}
            />
          </>
        ))}
      </div>
      <div className="container-commentaire-notes">
        <p className="title-notes">Voici vos notes :</p>
        {Object.entries(noteUser).map(([key, value]) => {
          return (
            <>
              <p className="nombreNotes"> {value.nom} </p>
              <p className="notesUser"> : {value.note}/100</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ConteneurNote;
