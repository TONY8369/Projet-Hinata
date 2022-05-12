import {
  ADD_COMMANDE,
  DELETE_COMMANDE,
  GET_COMMANDES,
} from "../actions/commandeUser.action";

const initialState = {};

export default function commandeUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMANDES:
      return action.payload;
    case ADD_COMMANDE:
      return [action.payload, ...state];
    case DELETE_COMMANDE:
      return state.filter(
        (payement) => payement._id !== action.payload.payementId
      );
    default:
      return state;
  }
}
