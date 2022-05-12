import React from "react";
import axios from "axios";
import cookie from "js-cookie";

const LogoutAdmin = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/admin/logoutAd`,
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/";
  };
  return (
    <li className="administratives" onClick={logout}>
      DECONNEXION
    </li>
  );
};

export default LogoutAdmin;
