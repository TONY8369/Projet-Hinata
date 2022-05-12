import { GET_ALL_EVENTS } from "../actions/eventAdmin.action";

const initialState = {};

export default function allEventReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return action.payload;
    default:
      return state;
  }
}
