import { GET_POST_ERRORS } from "../actions/postUser.action";
import { GET_RESERVATION_ERRORS } from "../actions/reservationUser.action";
import { GET_PLANNINGS_ERRORS } from "../actions/planningAdmin.action";
import { GET_PLANS_ERRORS } from "../actions/planAdmin.action";
import { GET_EVENTS_ERRORS } from "../actions/eventAdmin.action";
import { GET_NOTES_ERRORS } from "../actions/noteUser.action";

const initialState = {
  userError: [],
  postError: [],
  reservationError: [],
  planningsError: [],
  adminError: [],
  plansError: [],
  eventsError: [],
  notesError: [],
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_ERRORS:
      return {
        postError: action.payload,
        userError: [],
      };
    case GET_RESERVATION_ERRORS:
      return {
        reservationError: action.payload,
        userError: [],
      };
    case GET_PLANNINGS_ERRORS:
      return {
        planningsError: action.payload,
        adminError: [],
      };
    case GET_PLANS_ERRORS:
      return {
        plansError: action.payload,
        adminError: [],
      };
    case GET_EVENTS_ERRORS:
      return {
        eventsError: action.payload,
        adminError: [],
      };
    case GET_NOTES_ERRORS:
      return {
        notesError: action.payload,
        userError: [],
      };
    default:
      return state;
  }
}
