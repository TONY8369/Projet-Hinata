import axios from "axios";

// concernent les posts //
export const GET_RESERVATIONS = "GET_RESERVATIONS";
export const GET_ALL_RESERVATIONS = "GET_ALL_RESERVATIONS";
export const ADD_RESERVATION = "ADD_RESERVATION";
export const UPDATE_RESERVATION = "UPDATE_RESERVATION";
export const DELETE_RESERVATION = "DELETE_RESERVATION";
// Commentaire //
export const ADD_COMMENT_RESERVATION = "ADD_COMMENT_RESERVATION";
export const EDIT_COMMENT_RESERVATION = "EDIT_COMMENT_RESERVATION";
export const DELETE_COMMENT_RESERVATION = "DELETE_COMMENT_RESERVATION";

// Erreur //
export const GET_RESERVATION_ERRORS = "GET_RESERVATION_ERRORS";

export const getReservations = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/reservationUser/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_RESERVATIONS, payload: array });
        dispatch({ type: GET_ALL_RESERVATIONS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addReservation = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/reservationUser/`, data)
      .then((res) => {
        dispatch({ type: ADD_RESERVATION, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateReservation = (reservationId, message) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/reservationUser/${reservationId}`,
      data: { message },
    })
      .then((res) => {
        dispatch({
          type: UPDATE_RESERVATION,
          payload: { message, reservationId },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteReservation = (reservationId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/reservationUser/${reservationId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_RESERVATION, payload: { reservationId } });
      })
      .catch((err) => console.log(err));
  };
};

export const addCommentReservation = (
  reservationId,
  commenterId,
  text,
  commenterPseudo
) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/reservationUser/comment-reservation/${reservationId}`,
      data: { commenterId, text, commenterPseudo },
    })
      .then((res) => {
        dispatch({ type: ADD_COMMENT_RESERVATION, payload: { reservationId } });
      })
      .catch((err) => console.log(err));
  };
};
export const editCommentReservation = (reservationId, commentId, text) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/reservationUser/edit-comment-reservation/${reservationId}`,
      data: { commentId, text },
    })
      .then((res) => {
        dispatch({
          type: EDIT_COMMENT_RESERVATION,
          payload: { reservationId, commentId, text },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteCommentReservation = (reservationId, commentId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/reservationUser/delete-comment-reservation/${reservationId}`,
      data: { commentId },
    })
      .then((res) => {
        dispatch({
          type: DELETE_COMMENT_RESERVATION,
          payload: { reservationId, commentId },
        });
      })
      .catch((err) => console.log(err));
  };
};
