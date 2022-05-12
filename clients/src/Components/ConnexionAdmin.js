import React, { useState } from "react";
import axios from "axios";

const ConnexionAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".emailAdmin.error");
    const passwordError = document.querySelector(".passwordAdmin.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/admin/loginAd`,
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
          window.location = "/administrateur";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Formulaire-connexionAdmin">
      <form
        action=""
        onSubmit={handleLogin}
        className="formulaire-authentification"
      >
        <label htmlFor="email" className="labelAdmin">
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
        <div className="emailAdmin error"></div>
        <br />
        <label htmlFor="password" Mot de passe className="labelAdmin">
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
        <div className="passwordAdmin error"></div>
        <br />
        <input
          className="valider-connexion"
          type="submit"
          value="Se connecter"
        />
      </form>
    </div>
  );
};

export default ConnexionAdmin;
