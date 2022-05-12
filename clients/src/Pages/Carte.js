import React, { useEffect, useState } from "react";
import Commande from "../Components/Commande";
import Menu from "../Components/Menu";
import Titre from "../Components/Titre";
import Footer from "../Components/Footer";

const Carte = () => {
  //const [cart, updateCart] = useState([]);

  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <main>
      <Menu />
      <Titre />
      <div className="description-container">
        <div className="text-container">
          <h2 className="titre-description">
            Plats au wok, des sushis et des brochettes dans le Var, Le Hinata
          </h2>
          <p className="text">
            <span>Commandez</span> votre plat japonais préféré auprès du{" "}
            <span>Hinata à Pourcieux</span>. Que vous soyez des amateurs de{" "}
            <span>sushis ou de brochettes yakitori</span>, vous êtes au bon
            endroit. Goûtez de nouvelles saveurs et découvrez un concept
            original : <span>plats au wok</span>. N’hésitez pas à découvrir
            également nos <span>formules</span>.Nous mettons à votre disposition
            un large choix de recettes <span>traditionnelles</span>. Experts en
            restauration japonaise, nous proposons des nouilles poulets,
            crevette, bœuf…{" "}
          </p>
        </div>
      </div>
      <Commande cart={cart} updateCart={updateCart} />
      <Footer />
    </main>
  );
};

export default Carte;
