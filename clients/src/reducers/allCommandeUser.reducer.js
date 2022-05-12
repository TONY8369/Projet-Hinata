import { GET_ALL_COMMANDES } from "../actions/commandeUser.action";

const initialState = {};

export default function allCommandeUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COMMANDES:
      return action.payload;
    default:
      return state;
  }
}
