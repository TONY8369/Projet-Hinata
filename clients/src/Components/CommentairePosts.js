import React, { useState } from "react";
import { useSelector } from "react-redux";
import PostUser from "./log/PostUser";
import { isEmpty } from "./log/Utils";

const CommentairePosts = () => {
  const posts = useSelector((state) => state.postUserReducer);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container-commentaire-posts">
      {isOpen ? (
        <>
          <button
            className="lmj-cart-toggle-button-deux"
            onClick={() => setIsOpen(false)}
          >
            Fermer l'espace commentaire
          </button>

          {!isEmpty(posts) &&
            posts.map((post, index) => <PostUser post={post} key={index} />)}
        </>
      ) : (
        <button
          className="lmj-cart-toggle-button-deux"
          onClick={() => setIsOpen(true)}
        >
          Ouvrir l'espace commentaire
        </button>
      )}
    </div>
  );
};

export default CommentairePosts;
