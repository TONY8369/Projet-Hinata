import { GET_ALL_PLANS } from "../actions/planAdmin.action";

const initialState = {};

export default function allPlanReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PLANS:
      return action.payload;
    default:
      return state;
  }
}
