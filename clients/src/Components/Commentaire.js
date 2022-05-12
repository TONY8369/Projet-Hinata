import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../actions/postUser.action";
import CommentAdmin from "./log/CommentAdmin";
import { isEmpty } from "./log/Utils";

const Commentaire = () => {
  const [pseudo, setPseudo] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const posts = useSelector((state) => state.postUserReducer);
  const commentaireSuccess = document.querySelector(".success.commentaire");

  const handleForm = async (e) => {
    e.preventDefault();

    if (pseudo && message) {
      const data = {
        posterId: userData._id,
        pseudo,
        message,
        likes: 0,
      };
      await dispatch(addPost(data));
      setPseudo("");
      setMessage("");
      dispatch(getPosts());
      commentaireSuccess.innerHTML = "Commentaire Envoyé !";
    }
    setTimeout(() => {
      commentaireSuccess.innerHTML = "";
    }, 1000);
  };

  return (
    <div className="form-commentaire">
      <h1 className="titre-commentaire"> Espace commentaire</h1>
      <form className="commentaire-form" onSubmit={handleForm}>
        <input
          className="text-commentaire"
          type="text"
          placeholder="Pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
        <textarea
          className="zone-commentaire"
          placeholder=" Commentaire..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input className="commentaire-envoyer" type="submit" value="Envoyer" />
        <div className="success commentaire"></div>
      </form>
      <div className="content">
        <div className="post-container">
          <p className="pseudoPost" style={{ textTransform: "uppercase" }}>
            {pseudo}
          </p>
          <br />
          <p className="messagePost">{message}</p>
        </div>
        <div>
          {isOpen ? (
            <>
              <button
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(false)}
              >
                Fermer l'espace commentaire
              </button>

              {!isEmpty(posts) &&
                posts[0].comments.map((comment, index) => (
                  <CommentAdmin comment={comment} key={index} />
                ))}
            </>
          ) : (
            <button
              className="lmj-cart-toggle-button"
              onClick={() => setIsOpen(true)}
            >
              Ouvrir l'espace commentaire
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Commentaire;
