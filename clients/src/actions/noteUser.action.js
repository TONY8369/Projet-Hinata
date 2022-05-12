import axios from "axios";

// concernent les evenements //
export const GET_NOTES = "GET_NOTES";
export const GET_ALL_NOTES = "GET_ALL_NOTES";
export const ADD_NOTE = "ADD_NOTE";

export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
// Commentaire //

// Erreur //
export const GET_NOTES_ERRORS = "GET_EVENTS_ERRORS";

export const getNotes = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/noteUser/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_NOTES, payload: array });
        dispatch({ type: GET_ALL_NOTES, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addNote = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/noteUser/`, data)
      .then((res) => {
        dispatch({ type: ADD_NOTE, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateNote = (noteId, note) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/noteUser/${noteId}`,
      data: { note },
    })
      .then((res) => {
        dispatch({ type: UPDATE_NOTE, payload: { note, noteId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteNote = (noteId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/noteUser/${noteId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_NOTE, payload: { noteId } });
      })
      .catch((err) => console.log(err));
  };
};
