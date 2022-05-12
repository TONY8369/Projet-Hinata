import React, { useMemo, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const Transaction = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [amount, setAmount] = useState("");
  const [listee, setListee] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const payementSuccess = document.querySelector(".success.payement");

  const handleSubmitPaiement = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    const { id } = paymentMethod;
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/payement`,
      withCredentials: true,
      data: {
        payementid: id,
        amount: final,
        nom,
        prenom,
        adresse,
        telephone,
        liste: finals,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          console.log(error.message);
        } else {
          payementSuccess.innerHTML = " Payement éffectué !";
          console.log("Payement reussi");
          setTimeout(() => {
            payementSuccess.innerHTML = "";
            window.location = "/carte";
          }, 2000);
        }
      })
      .catch((err) => {
        console.log("Erreur !", err);
      });
  };

  const useOptions = () => {
    const fontSize = "18px";
    const options = useMemo(
      () => ({
        style: {
          base: {
            fontSize,
            color: "#eac55e",
            letterSpacing: "0.025em",
            fontFamily: "Roboto, Source Code Pro, monospace, SFUIDisplay",
            "::placeholder": {
              color: "#eac55e",
              letterSpacing: "2px",
              fontFamily: "Arial",
            },
          },
          invalid: {
            color: "#9e2146",
          },
        },
      }),
      [fontSize]
    );

    return options;
  };
  //hidePostalCode: true
  const options = useOptions();

  const tarif = window.location.search;
  console.log(tarif);

  const final = window.location.search.split("?montant=").join("");
  console.log(final);

  let paniers = JSON.parse(localStorage.getItem("cart"));
  console.log(paniers[0]);

  const finals = paniers.map(
    (liste) => `${liste.amount} ${liste.cover} ${liste.price}€ `
  );
  console.log(finals);
  return (
    <form
      action=""
      onSubmit={handleSubmitPaiement}
      style={{ maxWidth: 900, maxHeight: 600, color: "#eac55e" }}
      className="payer"
    >
      <CardElement options={options} />
      <input
        id="nom"
        type="text"
        placeholder="nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <input
        id="prenom"
        type="text"
        placeholder="prenom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />
      <input
        id="adresse"
        type="text"
        placeholder="Adresse Livraison"
        value={adresse}
        onChange={(e) => setAdresse(e.target.value)}
      />
      <input
        id="phone"
        type="text"
        placeholder="Téléphone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Commande"
        value={finals}
        className="listes-client"
        rows="200px"
        cols="20px"
        onChange={(e) => setListee([finals])}
      />
      <input
        className="somme"
        type="text"
        placeholder="Somme"
        value={final + " €"}
        onChange={(e) => setAmount([final])}
      />
      <button className="reglement" type="submit">
        Payer
      </button>
      <div className="success payement"></div>
    </form>
  );
};

export default Transaction;
