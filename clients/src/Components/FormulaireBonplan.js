import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlan, getPlans } from "../actions/planAdmin.action";

const FormulaireBonplan = () => {
  const [nom, setNom] = useState("");
  const [plan, setPlan] = useState("");
  const dispatch = useDispatch();
  const adminData = useSelector((state) => state.adminReducer);
  const planSuccess = document.querySelector(".success.plan");

  const handlePlan = async (e) => {
    e.preventDefault();

    if (nom && plan) {
      const data = {
        planId: adminData._id,
        nom,
        plan,
      };
      await dispatch(addPlan(data));
      setNom("");
      setPlan("");
      dispatch(getPlans());
      planSuccess.innerHTML = "BON PLAN Envoyé !";
    } else {
      planSuccess.innerHTML = "Echec de l'envoi";
    }
    setTimeout(() => {
      planSuccess.innerHTML = "";
    }, 1000);
  };

  return (
    <form className="form-bonplan" onSubmit={handlePlan}>
      <h2 className="title-content">Bon plan Hinata</h2>
      <div className="Bonplan-content">
        <input
          className="input-Bonplan"
          type="text"
          id="nom"
          name="nom"
          placeholder="nom *"
          autoComplete="off"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <textarea
          id="plan"
          name="plan"
          placeholder="Bon Plan *"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        />
      </div>
      <input className="buttonContact" type="submit" value="Envoyer" />
      <div className="success plan"></div>
    </form>
  );
};

export default FormulaireBonplan;
