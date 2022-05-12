import axios from "axios";

// concernent les posts //
export const GET_COMMANDES = "GET_COMMANDESS";
export const GET_ALL_COMMANDES = "GET_ALL_COMMANDES";
export const ADD_COMMANDE = "ADD_COMMANDE";
export const DELETE_COMMANDE = "DELETE_COMMANDE";

// Erreur //
export const GET_COMMANDE_ERRORS = "GET_COMMANDE_ERRORS";

export const getCommandes = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/payement/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_COMMANDES, payload: array });
        dispatch({ type: GET_ALL_COMMANDES, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addCommande = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/payement/`, data)
      .then((res) => {
        dispatch({ type: ADD_COMMANDE, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteCommande = (payementId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/payement/${payementId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_COMMANDE, payload: { payementId } });
      })
      .catch((err) => console.log(err));
  };
};
