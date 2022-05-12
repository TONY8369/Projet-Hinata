import React from "react";
import { useSelector } from "react-redux";

const Evenement = () => {
  const event = useSelector((state) => state.eventReducer);
  const plans = useSelector((state) => state.planReducer);

  return (
    <div className="evenement-container">
      <div className="container-evenement">
        <h1 className="titre-evenement">Evènements</h1>
        <div className="liste-evenement">
          <ul>
            {Object.entries(event).map(([key, value]) => {
              return (
                <>
                  <p className="sujet-evenement" key={key}>
                    {value.nom}
                  </p>
                  <p className="description-evenement">{value.evenement}</p>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="bon-plan-container">
        <h1 className="titre-bon-plan">Bon plans</h1>
        <div className="liste-bon-plan">
          <ul>
            {Object.entries(plans).map(([keys, value]) => {
              return (
                <p className="listePlan" key={keys}>
                  {value.plan}
                </p>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Evenement;
