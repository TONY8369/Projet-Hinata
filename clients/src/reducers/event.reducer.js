import {
  ADD_EVENT,
  DELETE_EVENT,
  GET_EVENTS,
  UPDATE_EVENT,
} from "../actions/eventAdmin.action";

const initialState = {};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.payload;
    case ADD_EVENT:
      return [action.payload, ...state];
    case UPDATE_EVENT:
      return state.map((event) => {
        if (event._id === action.payload.eventId) {
          return {
            ...event,
            evenement: action.payload.evenement,
          };
        } else return event;
      });
    case DELETE_EVENT:
      return state.filter((event) => event._id !== action.payload.eventId);
    default:
      return state;
  }
}
