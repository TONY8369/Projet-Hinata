import axios from "axios";

export const GET_ADMIN = "GET_ADMIN";

export const getAdmin = (uidAdmin) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/admin/${uidAdmin}`)
      .then((res) => {
        dispatch({ type: GET_ADMIN, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
