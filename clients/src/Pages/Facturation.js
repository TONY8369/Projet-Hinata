import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Transaction from "../Components/stripe/Transaction";
import { useLocation } from "react-router-dom";

const Facturation = () => {
  const PUBLIC_KEY =
    "pk_test_51KjIwPLh1g6bSYaMC9SAVKbc3f87uoCWctCyMItShHKmFyiZvmwGS5L30L5UEF0nKsVu7i6sdtH23M4HXgMXsS6m00DsSqiAGC";
  const stripeTestPromise = loadStripe(PUBLIC_KEY);

  console.log(localStorage.getItem("cart"));

  let location = useLocation();
  console.log(location);

  let paniers = JSON.parse(localStorage.getItem("cart"));
  console.log(paniers[0]);

  return (
    <Elements stripe={stripeTestPromise}>
      <h1 className="title-paiement">Transaction</h1>
      <Transaction />
    </Elements>
  );
};

export default Facturation;
