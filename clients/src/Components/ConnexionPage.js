import React, { useState } from "react";
import axios from "axios";

const ConnexionPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".emailConnexion.error");
    const passwordError = document.querySelector(".passwordConnexion.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/deconnexion";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Formulaire-connexion">
      <form
        action=""
        onSubmit={handleLogin}
        className="formulaire-authentification"
      >
        <label htmlFor="email" className="labelConnexion">
          {" "}
          Quelle est votre adresse Email
        </label>
        <br />
        <input
          className="formulaire-email"
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <div className="emailConnexion error"></div>
        <br />
        <label htmlFor="password" Mot de passe className="labelConnexion">
          Quel est votre mot de passe
        </label>
        <br />
        <input
          className="formulaire-password"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
        />
        <div className="passwordConnexion error"></div>
        <br />
        <input
          className="valider-connexion"
          id="connexion"
          type="submit"
          value="Se connecter"
        />
      </form>
    </div>
  );
};

export default ConnexionPage;
