import {
  ADD_RESERVATION,
  DELETE_COMMENT_RESERVATION,
  DELETE_RESERVATION,
  EDIT_COMMENT_RESERVATION,
  GET_RESERVATIONS,
  UPDATE_RESERVATION,
} from "../actions/reservationUser.action";

const initialState = {};

export default function reservationUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    case ADD_RESERVATION:
      return [action.payload, ...state];
    case UPDATE_RESERVATION:
      return state.map((reservation) => {
        if (reservation._id === action.payload.reservationId) {
          return {
            ...reservation,
            message: action.payload.message,
          };
        } else return reservation;
      });
    case DELETE_RESERVATION:
      return state.filter(
        (reservation) => reservation._id !== action.payload.reservationId
      );
    case EDIT_COMMENT_RESERVATION:
      return state.map((reservation) => {
        if (reservation._id === action.payload.reservationId) {
          return {
            ...reservation,
            comments: reservation.comments.map((comment) => {
              if (comment._id === action.payload.commentId) {
                return {
                  ...comment,
                  text: action.payload.text,
                };
              } else {
                return comment;
              }
            }),
          };
        } else return reservation;
      });
    case DELETE_COMMENT_RESERVATION:
      return state.map((reservation) => {
        if (reservation._id === action.payload.reservationId) {
          return {
            ...reservation,
            comments: reservation.comments.filter(
              (comment) => comment._id !== action.payload.commentId
            ),
          };
        } else return reservation;
      });
    default:
      return state;
  }
}
