import React, { useState } from "react";
import axios from "axios";

const InscriptionPage = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const confPasswordError = document.querySelector(".password-confirm.error");
    const termsError = document.querySelector(".terms-error");

    confPasswordError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword)
        confPasswordError.innerHTML =
          "Les mot des passes ne correspondent pas ";
      if (!terms.checked)
        termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          pseudo,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {formSubmit ? (
        <h4 className="succesInscription">
          Enregistrement réussi, vous pouvez vous connecter !
        </h4>
      ) : (
        <div className="formulaire-inscription">
          <form
            action=""
            onSubmit={handleRegister}
            className="formulaire-inscriptionSite"
          >
            <label htmlFor="pseudo" className="labelConnexion">
              Pseudo
            </label>
            <br />
            <input
              type="text"
              name="pseudo"
              id="pseudo"
              onChange={(e) => setPseudo(e.target.value)}
              value={pseudo}
              className="formulaire-pseudo"
              placeholder="Pseudo"
            />
            <div className="pseudo error"></div>
            <br />
            <label htmlFor="email" className="labelConnexion">
              Email
            </label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="formulaire-Email"
              placeholder="Email"
            />
            <div className="email error"></div>
            <br />
            <label htmlFor="password" className="labelConnexion">
              Mot de passe
            </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="formulaire-Password"
              placeholder="password"
            />
            <div className="password error"></div>
            <br />
            <label htmlFor="password-conf" className="labelConnexion">
              Confirmer mot de passe
            </label>
            <br />
            <input
              type="password"
              name="password-conf"
              id="password-conf"
              onChange={(e) => setControlPassword(e.target.value)}
              value={controlPassword}
              className="formulaire-Password"
              placeholder="password"
            />
            <div className="password-confirm error"></div>
            <br />
            <input className="condition" type="checkbox" id="terms" />
            <label htmlFor="terms" className="labelConnexion">
              {" "}
              J'accepte les{" "}
              <a href="/" target="_blank" rel="noopener noreferrer">
                {" "}
                conditions générales
              </a>
            </label>
            <div className="terms-error"></div>
            <input
              type="submit"
              value="Valider inscription"
              className="valider-inscription"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default InscriptionPage;
