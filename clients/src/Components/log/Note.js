import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import { addNote, getNotes } from "../../actions/noteUser.action";

const Note = () => {
  const [rating, setRating] = useState(0); // initial rating value
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [nom, setNom] = useState("");

  // Catch Rating value
  const handleRating = async (rate) => {
    if (rate) {
      const data = {
        noteId: userData._id,
        nom,
        note: rate,
      };
      await dispatch(addNote(data));
      console.log(rate);
      setNom("");
      setRating(rate);
      dispatch(getNotes());
      // other logic
    }
  };

  return (
    <div className="AppEtoile">
      <input
        id="note"
        type="text"
        placeholder="Nom du plats"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <Rating
        onClick={handleRating}
        allowHalfIcon
        ratingValue={rating}
        size={25}
        /* Available Props */
      />
    </div>
  );
};

export default Note;
