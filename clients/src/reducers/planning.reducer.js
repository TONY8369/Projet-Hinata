import {
  ADD_PLANNING,
  DELETE_PLANNING,
  GET_PLANNINGS,
  UPDATE_PLANNING,
} from "../actions/planningAdmin.action";

const initialState = {};

export default function planningReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLANNINGS:
      return action.payload;
    case ADD_PLANNING:
      return [action.payload, ...state];
    case UPDATE_PLANNING:
      return state.map((planning) => {
        if (planning._id === action.payload.eventId) {
          return {
            ...planning,
            start: action.payload.start,
            end: action.payload.end,
          };
        } else return planning;
      });
    case DELETE_PLANNING:
      return state.filter(
        (planning) => planning._id !== action.payload.planningId
      );
    default:
      return state;
  }
}
