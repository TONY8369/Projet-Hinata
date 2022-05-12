import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DataImage } from "../data/DataImage";
import Note from "./log/Note";

const LikeImage = () => {
  const [selectedImg, setSelectedImg] = useState(DataImage[0].img);
  const noteUser = useSelector((state) => state.noteUserReducer);

  return (
    <div className="container-like">
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
      <p className="title-like">
        Voter en inscrivant le nom de vos plats préférée et indiquer votre note
        avec les étoiles :
      </p>
      {DataImage.map(({ indexDeux, name, indexTrois, indexQuatre, id }) => (
        <div className="conteur-like" key={indexDeux}>
          <img
            key={indexTrois}
            className="likes"
            src={`${require("../image/Likes/1like.png")}`}
            alt="like"
          />
          <span className="conteur" key={indexQuatre}>
            {name} : Photo {id}
          </span>
        </div>
      ))}
      <Note />
      <div className="noteUsers">
        <p className="title-like">Voici vos notes :</p>
        {Object.entries(noteUser).map(([key, value]) => {
          return (
            <>
              <p className="nombreNotes" key={key}>
                {" "}
                {value.nom}{" "}
              </p>
              <p className="notesUser"> : {value.note}/100</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LikeImage;
