import Panier from "./Panier";
import React from "react";
import { listePlats } from "../data/DataPlats";

const Commande = ({ cart, updateCart }) => {
  const addToCart = (cover, price) => {
    const currentPlatsAdded = cart.find((plats) => plats.cover === cover);
    if (currentPlatsAdded) {
      const cartFilteredCurrentPlats = cart.filter(
        (plats) => plats.cover !== cover
      );
      updateCart([
        ...cartFilteredCurrentPlats,
        { cover, price, amount: currentPlatsAdded.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { cover, price, amount: 1 }]);
    }
  };
  console.log(addToCart);

  return (
    <div className="commande-container">
      <Panier cart={cart} updateCart={updateCart} />
      <div className="type-commande">
        <div className="le-menu">
          <ul className="intituler">
            MENU / LE HINATA
            <div className="les-menu">
              <p className="plat">
                MENU 1<div className="contenu">{listePlats[0].quantiter}</div>
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[0].cover, listePlats[0].price)
                  }
                  className="buttun"
                >
                  {listePlats[0].price}0€
                </button>
              </p>

              <p className="plat">
                MENU 2{" "}
                <div className="contenuDeux">{listePlats[1].quantiter}</div>
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[1].cover, listePlats[1].price)
                  }
                  className="buttun"
                >
                  {listePlats[1].price}0€
                </button>
              </p>

              <p className="plat">
                MENU 3{" "}
                <div className="contenuTrois">{listePlats[2].quantiter}</div>
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[2].cover, listePlats[2].price)
                  }
                  className="buttun"
                >
                  {listePlats[2].price}0€
                </button>
              </p>
            </div>
          </ul>
        </div>

        <div className="le-menu">
          <ul className="intituler">
            MENU / WORKERS
            <div className="les-menu">
              <p className="plat">
                MENU FROID
                <div className="contenu">
                  <div className="contenuQuatre">{listePlats[3].quantiter}</div>
                </div>
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[3].cover, listePlats[3].price)
                  }
                  className="buttun"
                >
                  {listePlats[3].price}0€
                </button>
              </p>
              <p className="plat">
                MENU MIXTE{" "}
                <div className="contenu">
                  <div className="contenuQuatre">{listePlats[4].quantiter}</div>
                </div>
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[4].cover, listePlats[4].price)
                  }
                  className="buttun"
                >
                  {listePlats[4].price}0€
                </button>
              </p>
              <p className="plat">
                MENU CHAUD{" "}
                <div className="contenu">
                  <div className="contenuQuatre">{listePlats[5].quantiter}</div>
                </div>
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[5].cover, listePlats[5].price)
                  }
                  className="buttun"
                >
                  {listePlats[5].price}0€
                </button>
              </p>
            </div>
          </ul>
        </div>
        <div className="le-menu">
          <ul className="intituler">
            MENU / ETUDIANTS
            <div className="les-menu">
              <p className="plat">
                MENU FROID
                <div className="contenu">
                  <div className="contenuQuatre">{listePlats[6].quantiter}</div>
                </div>
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[6].cover, listePlats[6].price)
                  }
                  className="buttun"
                >
                  {listePlats[6].price}0€
                </button>
              </p>
              <p className="plat">
                MENU MIXTE{" "}
                <div className="contenu">
                  <div className="contenuQuatre">{listePlats[7].quantiter}</div>
                </div>
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[7].cover, listePlats[7].price)
                  }
                  className="buttun"
                >
                  {listePlats[7].price}0€
                </button>
              </p>
              <p className="plat">
                MENU CHAUD{" "}
                <div className="contenu">
                  <div className="contenuQuatre">{listePlats[8].quantiter}</div>
                </div>
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[8].cover, listePlats[8].price)
                  }
                  className="buttun"
                >
                  {listePlats[8].price}0€
                </button>
              </p>
            </div>
          </ul>
        </div>
        <div className="le-menuDeux">
          <ul className="intituler">
            MAKI / 8 pièces
            <div className="les-menu">
              <p className="plat">
                SAUMON{" "}
                <img className="repas1" src={listePlats[9].img} alt="maki" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[9].cover, listePlats[9].price)
                  }
                  className="buttunOne"
                >
                  {listePlats[9].price}0€
                </button>
              </p>
              <p className="plat">
                SAUMON AVOCAT{" "}
                <img className="repas1" src={listePlats[10].img} alt="maki" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[10].cover, listePlats[10].price)
                  }
                  className="buttunOne"
                >
                  {listePlats[10].price}0€
                </button>
              </p>
              <p className="plat">
                SAUMON CHEESE{" "}
                <img className="repas1" src={listePlats[11].img} alt="maki" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[11].cover, listePlats[11].price)
                  }
                  className="buttunOne"
                >
                  {listePlats[11].price}0€
                </button>
              </p>
              <p className="plat">
                THON CRU{" "}
                <img className="repas1" src={listePlats[12].img} alt="maki" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[12].cover, listePlats[12].price)
                  }
                  className="buttunOne"
                >
                  {listePlats[12].price}0€
                </button>
              </p>
              <p className="plat">
                THON CRU MAYONNAISE{" "}
                <img className="repas1" src={listePlats[13].img} alt="maki" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[13].cover, listePlats[13].price)
                  }
                  className="buttunOne"
                >
                  {listePlats[13].price}0€
                </button>
              </p>
              <p className="plat">
                CONCOMBRE CHEESE{" "}
                <img className="repas1" src={listePlats[14].img} alt="maki" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[14].cover, listePlats[14].price)
                  }
                  className="buttunOne"
                >
                  {listePlats[14].price}0€
                </button>
              </p>
              <p className="plat">
                AVOCAT{" "}
                <img className="repas1" src={listePlats[15].img} alt="maki" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[15].cover, listePlats[15].price)
                  }
                  className="buttunOne"
                >
                  {listePlats[15].price}0€
                </button>
              </p>
              <p className="plat">
                VEGETARIEN{" "}
                <img className="repas1" src={listePlats[16].img} alt="maki" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[16].cover, listePlats[16].price)
                  }
                  className="buttunOne"
                >
                  {listePlats[16].price}0€
                </button>
              </p>
            </div>
          </ul>
        </div>
        <div className="le-menuTrois">
          <ul className="intituler">
            SUSHI / 8 pièces
            <div className="les-menu">
              <p className="plat">
                SAUMON{" "}
                <img className="repas2" src={listePlats[17].img} alt="sushi" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[17].cover, listePlats[17].price)
                  }
                  className="buttuntwo"
                >
                  {listePlats[17].price}0€
                </button>
              </p>
              <p className="plat">
                SAUMON CHEESE{" "}
                <img className="repas2" src={listePlats[18].img} alt="sushi" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[18].cover, listePlats[18].price)
                  }
                  className="buttuntwo"
                >
                  {listePlats[18].price}0€
                </button>
              </p>
              <p className="plat">
                THON CRU{" "}
                <img className="repas2" src={listePlats[19].img} alt="sushi" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[19].cover, listePlats[19].price)
                  }
                  className="buttuntwo"
                >
                  {listePlats[19].price}0€
                </button>
              </p>
              <p className="plat">
                THON CHEESE{" "}
                <img className="repas2" src={listePlats[20].img} alt="sushi" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[20].cover, listePlats[20].price)
                  }
                  className="buttuntwo"
                >
                  {listePlats[20].price}0€
                </button>
              </p>
              <p className="plat">
                CREVETTE{" "}
                <img className="repas2" src={listePlats[21].img} alt="sushi" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[21].cover, listePlats[21].price)
                  }
                  className="buttuntwo"
                >
                  {listePlats[21].price}0€
                </button>
              </p>
              <p className="plat">
                CREVETTE CHEESE{" "}
                <img className="repas2" src={listePlats[22].img} alt="sushi" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[22].cover, listePlats[22].price)
                  }
                  className="buttuntwo"
                >
                  {listePlats[22].price}0€
                </button>
              </p>
            </div>
          </ul>
        </div>
        <div className="le-menuQuatre">
          <ul className="intituler">
            CALIFORNIAS / 8 pièces
            <div className="les-menu">
              <p className="plat">
                SAUMON CHEESE{" "}
                <img
                  className="repas3"
                  src={listePlats[23].img}
                  alt="california"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[23].cover, listePlats[23].price)
                  }
                  className="buttunthree"
                >
                  {listePlats[23].price}0€
                </button>
              </p>
              <p className="plat">
                SURIMI AVOCAT{" "}
                <img
                  className="repas3"
                  src={listePlats[24].img}
                  alt="california"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[24].cover, listePlats[24].price)
                  }
                  className="buttunthree"
                >
                  {listePlats[24].price}0€
                </button>
              </p>
              <p className="plat">
                SAUMON AVOCAT{" "}
                <img
                  className="repas3"
                  src={listePlats[25].img}
                  alt="california"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[25].cover, listePlats[25].price)
                  }
                  className="buttunthree"
                >
                  {listePlats[25].price}0€
                </button>
              </p>
              <p className="plat">
                THON AVOCAT MAYONNAISE{" "}
                <img
                  className="repas3"
                  src={listePlats[26].img}
                  alt="california"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[26].cover, listePlats[26].price)
                  }
                  className="buttunthree"
                >
                  {listePlats[26].price}0€
                </button>
              </p>
              <p className="plat">
                LE HINATA OIGNON FRIT{" "}
                <img
                  className="repas3"
                  src={listePlats[27].img}
                  alt="california"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[27].cover, listePlats[27].price)
                  }
                  className="buttunthree"
                >
                  {listePlats[27].price}0€
                </button>
              </p>
              <p className="plat">
                VEGETARIEN{" "}
                <img
                  className="repas3"
                  src={listePlats[28].img}
                  alt="california"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[28].cover, listePlats[28].price)
                  }
                  className="buttunthree"
                >
                  {listePlats[28].price}0€
                </button>
              </p>
              <p className="plat">
                AVOCAT CHEESE{" "}
                <img
                  className="repas3"
                  src={listePlats[29].img}
                  alt="california"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[29].cover, listePlats[29].price)
                  }
                  className="buttunthree"
                >
                  {listePlats[29].price}0€
                </button>
              </p>
              <p className="plat">
                CONCOMBRE CHEESE{" "}
                <img
                  className="repas3"
                  src={listePlats[30].img}
                  alt="california"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[30].cover, listePlats[30].price)
                  }
                  className="buttunthree"
                >
                  {listePlats[30].price}0€
                </button>
              </p>
              <p className="plat">
                CONCOMBRE AVOCAT{" "}
                <img
                  className="repas3"
                  src={listePlats[31].img}
                  alt="california"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[31].cover, listePlats[31].price)
                  }
                  className="buttunthree"
                >
                  {listePlats[31].price}0€
                </button>
              </p>
              <p className="plat">
                TEMPURA SPICY{" "}
                <img
                  className="repas3"
                  src={listePlats[32].img}
                  alt="california"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[32].cover, listePlats[32].price)
                  }
                  className="buttunthree"
                >
                  {listePlats[32].price}0€
                </button>
              </p>
              <p className="plat">
                POULET PARMESAN{" "}
                <img
                  className="repas3"
                  src={listePlats[33].img}
                  alt="california"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[33].cover, listePlats[33].price)
                  }
                  className="buttunthree"
                >
                  {listePlats[33].price}0€
                </button>
              </p>
            </div>
          </ul>
        </div>
        <div className="le-menu">
          <ul className="intituler">
            SASHIMI / 6 pièces
            <div className="les-menu">
              <p className="plat">
                CALIFORNIA SAUMON{" "}
                <img className="repas" src={listePlats[34].img} alt="sashimi" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[34].cover, listePlats[34].price)
                  }
                  className="buttun"
                >
                  {listePlats[34].price}0€
                </button>{" "}
              </p>
              <p className="plat">
                THON{" "}
                <img className="repas" src={listePlats[35].img} alt="sashimi" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[35].cover, listePlats[35].price)
                  }
                  className="buttun"
                >
                  {listePlats[35].price}0€
                </button>
              </p>
              <p className="plat">
                THON SAUMON{" "}
                <img className="repas" src={listePlats[36].img} alt="sashimi" />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[36].cover, listePlats[36].price)
                  }
                  className="buttun"
                >
                  {listePlats[36].price}0€
                </button>
              </p>
            </div>
          </ul>
        </div>
        <div className="le-menu">
          <ul className="intituler">
            SAUMON ROLLS / 8 pièces
            <div className="les-menu">
              <p className="plat">
                CHEESE{" "}
                <img
                  className="repas"
                  src={listePlats[37].img}
                  alt="saumon rolls"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[37].cover, listePlats[37].price)
                  }
                  className="buttun"
                >
                  {listePlats[37].price}0€
                </button>
              </p>
              <p className="plat">
                AVOCAT{" "}
                <img
                  className="repas"
                  src={listePlats[38].img}
                  alt="saumon rolls"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[38].cover, listePlats[38].price)
                  }
                  className="buttun"
                >
                  {listePlats[38].price}0€
                </button>
              </p>
              <p className="plat">
                CONCOMBRE{" "}
                <img
                  className="repas"
                  src={listePlats[39].img}
                  alt="saumon rolls"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[39].cover, listePlats[39].price)
                  }
                  className="buttun"
                >
                  {listePlats[39].price}0€
                </button>
              </p>
            </div>
          </ul>
        </div>
        <div className="le-menuCinq">
          <ul className="intituler">
            POKE BOWLS
            <div className="les-menu">
              <p className="plat">
                VEGETARIEN{" "}
                <img
                  className="repas4"
                  src={listePlats[40].img}
                  alt="poke bowls"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[40].cover, listePlats[40].price)
                  }
                  className="buttunfor"
                >
                  {listePlats[40].price}0€
                </button>{" "}
              </p>
              <p className="plat">
                SAUMON{" "}
                <img
                  className="repas4"
                  src={listePlats[41].img}
                  alt="poke bowls"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[41].cover, listePlats[41].price)
                  }
                  className="buttunfor"
                >
                  {listePlats[41].price}0€
                </button>
              </p>
              <p className="plat">
                CREVETTE{" "}
                <img
                  className="repas4"
                  src={listePlats[42].img}
                  alt="poke bowls"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[42].cover, listePlats[42].price)
                  }
                  className="buttunfor"
                >
                  {listePlats[42].price}0€
                </button>
              </p>
              <p className="plat">
                POULET{" "}
                <img
                  className="repas4"
                  src={listePlats[43].img}
                  alt="poke bowls"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[43].cover, listePlats[43].price)
                  }
                  className="buttunfor"
                >
                  {listePlats[43].price}0€
                </button>
              </p>
              <p className="plat">
                THON{" "}
                <img
                  className="repas4"
                  src={listePlats[44].img}
                  alt="poke bowls"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[44].cover, listePlats[44].price)
                  }
                  className="buttunfor"
                >
                  {listePlats[44].price}0€
                </button>
              </p>
            </div>
          </ul>
        </div>
        <div className="le-menuSix">
          <ul className="intituler">
            ACCOMPAGNEMENTS
            <div className="les-menu">
              <p className="plat">
                SALADE DE CHOU{" "}
                <img
                  className="repas5"
                  src={listePlats[45].img}
                  alt="accompagnement"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[45].cover, listePlats[45].price)
                  }
                  className="buttunfive"
                >
                  {listePlats[45].price}€
                </button>
              </p>
              <p className="plat">
                SALADE DE WAKAME{" "}
                <img
                  className="repas5"
                  src={listePlats[46].img}
                  alt="accompagnement"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[46].cover, listePlats[46].price)
                  }
                  className="buttunfive"
                >
                  {listePlats[46].price}0€
                </button>
              </p>
              <p className="plat">
                SOUPE MISO NATURE OU CREVETTE{" "}
                <img
                  className="repas5"
                  src={listePlats[47].img}
                  alt="accompagnement"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[47].cover, listePlats[47].price)
                  }
                  className="buttunfive"
                >
                  {listePlats[47].price}0€
                </button>
              </p>
              <p className="plat">
                RIZ VINAIGRE{" "}
                <img
                  className="repas5"
                  src={listePlats[48].img}
                  alt="accompagnement"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[48].cover, listePlats[48].price)
                  }
                  className="buttunfive"
                >
                  {listePlats[48].price}0€
                </button>
              </p>
            </div>
          </ul>
        </div>
        <div className="le-menuSept">
          <ul className="intituler">
            COTE CHAUD
            <div className="les-menu">
              <p className="plat">
                BROCHETTE CREVETTE{" "}
                <img
                  className="repas4"
                  src={listePlats[49].img}
                  alt="cote chaud"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[49].cover, listePlats[49].price)
                  }
                  className="buttunfor"
                >
                  {listePlats[49].price}0€
                </button>
              </p>
              <p className="plat">
                BROCHETTE POULET{" "}
                <img
                  className="repas4"
                  src={listePlats[50].img}
                  alt="cote chaud"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[50].cover, listePlats[50].price)
                  }
                  className="buttunfor"
                >
                  {listePlats[50].price}0€
                </button>
              </p>
              <p className="plat">
                BROCHETTE BOEUF FROMAGE{" "}
                <img
                  className="repas4"
                  src={listePlats[51].img}
                  alt="cote chaud"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[51].cover, listePlats[51].price)
                  }
                  className="buttunfor"
                >
                  {listePlats[51].price}0€
                </button>
              </p>
              <p className="plat">
                NOUILLE : POULET, CREVETTE OU BOEUF{" "}
                <img
                  className="repas4"
                  src={listePlats[52].img}
                  alt="cote chaud"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[52].cover, listePlats[52].price)
                  }
                  className="buttunfor"
                >
                  {listePlats[52].price}0€
                </button>
              </p>
              <p className="plat">
                WOK: POULET , CREVETTE OU BOEUF{" "}
                <img
                  className="repas4"
                  src={listePlats[53].img}
                  alt="cote chaud"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[53].cover, listePlats[53].price)
                  }
                  className="buttunfor"
                >
                  {listePlats[53].price}0€
                </button>
              </p>
            </div>
          </ul>
        </div>
        <div className="le-menuHuit">
          <ul className="intituler">
            FRITURES / 4 pièces
            <div className="les-menu">
              <p className="plat">
                NEM AUX POULETS{" "}
                <img
                  className="repas6"
                  src={listePlats[54].img}
                  alt="friture"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[54].cover, listePlats[54].price)
                  }
                  className="buttunsix"
                >
                  {listePlats[54].price}0€
                </button>
              </p>
              <p className="plat">
                PINCE DE CRABE{" "}
                <img
                  className="repas6"
                  src={listePlats[55].img}
                  alt="friture"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[55].cover, listePlats[55].price)
                  }
                  className="buttunsix"
                >
                  {listePlats[55].price}0€
                </button>
              </p>
              <p className="plat">
                NEM AUX CREVETTES{" "}
                <img
                  className="repas6"
                  src={listePlats[56].img}
                  alt="friture"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[56].cover, listePlats[56].price)
                  }
                  className="buttunsix"
                >
                  {listePlats[56].price}0€
                </button>
              </p>
              <p className="plat">
                GYOSAS LEGUMES OU POULET{" "}
                <img
                  className="repas6"
                  src={listePlats[57].img}
                  alt="friture"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[57].cover, listePlats[57].price)
                  }
                  className="buttunsix"
                >
                  {listePlats[57].price}0€
                </button>
              </p>
              <p className="plat">
                NEM AUX LEGUMES{" "}
                <img
                  className="repas6"
                  src={listePlats[58].img}
                  alt="friture"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[58].cover, listePlats[58].price)
                  }
                  className="buttunsix"
                >
                  {listePlats[58].price}0€
                </button>
              </p>
              <p className="plat">
                EBBY FRIT{" "}
                <img
                  className="repas6"
                  src={listePlats[59].img}
                  alt="friture"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[59].cover, listePlats[59].price)
                  }
                  className="buttunsix"
                >
                  {listePlats[59].price}0€
                </button>
              </p>
              <p className="plat">
                SAMOUSSA BOEUF{" "}
                <img
                  className="repas6"
                  src={listePlats[60].img}
                  alt="friture"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[60].cover, listePlats[60].price)
                  }
                  className="buttunsix"
                >
                  {listePlats[60].price}0€
                </button>
              </p>
            </div>
          </ul>
        </div>
        <div className="le-menuNeuf">
          <ul className="intituler">
            BOISSON
            <div className="les-menu">
              <p className="plat">
                SODAS CLASSIQUE{" "}
                <img
                  className="repas2"
                  src={listePlats[61].img}
                  alt="boisson"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[61].cover, listePlats[61].price)
                  }
                  className="buttuntwo"
                >
                  {listePlats[61].price}€
                </button>
              </p>
              <p className="plat">
                POKKA{" "}
                <img
                  className="repas2"
                  src={listePlats[62].img}
                  alt="boisson"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[62].cover, listePlats[62].price)
                  }
                  className="buttuntwo"
                >
                  {listePlats[62].price}0€
                </button>
              </p>
              <p className="plat">
                ARTESAN{" "}
                <img
                  className="repas2"
                  src={listePlats[63].img}
                  alt="boisson"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[63].cover, listePlats[63].price)
                  }
                  className="buttuntwo"
                >
                  {listePlats[63].price}€
                </button>
              </p>
              <p className="plat">
                RAMUNE, LIMONADE JAPONAISE{" "}
                <img
                  className="repas2"
                  src={listePlats[64].img}
                  alt="boisson"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[64].cover, listePlats[64].price)
                  }
                  className="buttuntwo"
                >
                  {listePlats[64].price}0€
                </button>
              </p>
              <p className="plat">
                BIERE JAPONAISE{" "}
                <img
                  className="repas2"
                  src={listePlats[65].img}
                  alt="boisson"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[65].cover, listePlats[65].price)
                  }
                  className="buttuntwo"
                >
                  {listePlats[65].price}0€
                </button>
              </p>
              <p className="plat">
                BIERE THAI{" "}
                <img
                  className="repas2"
                  src={listePlats[66].img}
                  alt="boisson"
                />
                <button
                  id="ajout"
                  onClick={() =>
                    addToCart(listePlats[66].cover, listePlats[66].price)
                  }
                  className="buttuntwo"
                >
                  {listePlats[66].price}€
                </button>
              </p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Commande;
