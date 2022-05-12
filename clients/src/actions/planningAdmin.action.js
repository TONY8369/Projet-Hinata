import axios from "axios";

// concernent les evenements //
export const GET_PLANNINGS = "GET_PLANNINGS";
export const GET_ALL_PLANNINGS = "GET_ALL_PLANNINGS";
export const ADD_PLANNING = "ADD_PLANNING";

export const UPDATE_PLANNING = "UPDATE_PLANNING";
export const DELETE_PLANNING = "DELETE_PLANNING";
// Commentaire //

// Erreur //
export const GET_PLANNINGS_ERRORS = "GET_PLANNINGS_ERRORS";

export const getPlannings = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/planningAdmin/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_PLANNINGS, payload: array });
        dispatch({ type: GET_ALL_PLANNINGS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addPlanning = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/planningAdmin/`, data)
      .then((res) => {
        dispatch({ type: ADD_PLANNING, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const updatePlanning = (planningId, title, start, end) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/planningAdmin/${planningId}`,
      data: { title, start, end },
    })
      .then((res) => {
        dispatch({
          type: UPDATE_PLANNING,
          payload: { title, start, end, planningId },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePlanning = (planningId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/planningAdmin/${planningId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_PLANNING, payload: { planningId } });
      })
      .catch((err) => console.log(err));
  };
};
