import axios from "axios";

// concernent les evenements //
export const GET_EVENTS = "GET_EVENTS";
export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
export const ADD_EVENT = "ADD_EVENT";

export const UPDATE_EVENT = "UPDATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
// Commentaire //

// Erreur //
export const GET_EVENTS_ERRORS = "GET_EVENTS_ERRORS";

export const getEvents = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/eventAdmin/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_EVENTS, payload: array });
        dispatch({ type: GET_ALL_EVENTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addEvent = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/eventAdmin/`, data)
      .then((res) => {
        dispatch({ type: ADD_EVENT, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateEvent = (eventId, evenement) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/eventAdmin/${eventId}`,
      data: { evenement },
    })
      .then((res) => {
        dispatch({ type: UPDATE_EVENT, payload: { evenement, eventId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteEvent = (eventId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/eventAdmin/${eventId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_EVENT, payload: { eventId } });
      })
      .catch((err) => console.log(err));
  };
};
