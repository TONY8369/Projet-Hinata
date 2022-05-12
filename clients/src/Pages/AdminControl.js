import React from "react";
import ConnexionAdmin from "../Components/ConnexionAdmin";
import Footer from "../Components/Footer";

const AdminControl = () => {
  return (
    <div className="FormulaireAdmin">
      <h1 className="titreAdmin">Veuillez vous Identifier Administrateur</h1>
      <ConnexionAdmin />
      <Footer />
    </div>
  );
};

export default AdminControl;
