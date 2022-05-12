import { GET_ALL_RESERVATIONS } from "../actions/reservationUser.action";

const initialState = {};

export default function allReservationsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
}
