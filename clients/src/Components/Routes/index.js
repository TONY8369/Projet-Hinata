import React from "react";
import { Route, Routes } from "react-router-dom";
import Administrator from "../../Pages/Administrator";
import Carte from "../../Pages/Carte";
import Connexion from "../../Pages/Connexion";
import Contact from "../../Pages/Contact";
import Deconexion from "../../Pages/Deconexion";
import Home from "../../Pages/Home";
import NotFound from "../../Pages/NotFound";
import { BrowserRouter as Router } from "react-router-dom";
import AdminControl from "../../Pages/AdminControl";
import FormulaireReservation from "../../Pages/FormulaireReservation";
import Facturation from "../../Pages/Facturation";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/carte" element={<Carte />} />
        <Route exact={true} path="/connexion" element={<Connexion />} />
        <Route exact={true} path="/deconnexion" element={<Deconexion />} />
        <Route exact={true} path="/contact" element={<Contact />} />
        <Route
          exact={true}
          path="/administrateur"
          element={<Administrator />}
        />
        <Route exact={true} path="/connexionAdmin" element={<AdminControl />} />
        <Route
          exact={true}
          path="/formulaireReservation"
          element={<FormulaireReservation />}
        />
        <Route exact={true} path="/facturation" element={<Facturation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default index;
