import { GET_ALL_PLANNINGS } from "../actions/planningAdmin.action";

const initialState = {};

export default function allPlanningReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PLANNINGS:
      return action.payload;
    default:
      return state;
  }
}
