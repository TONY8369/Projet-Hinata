import { GET_ALL_NOTES } from "../actions/noteUser.action";

const initialState = {};

export default function allNoteUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_NOTES:
      return action.payload;
    default:
      return state;
  }
}
