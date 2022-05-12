import {
  ADD_PLAN,
  DELETE_PLAN,
  GET_PLANS,
  UPDATE_PLAN,
} from "../actions/planAdmin.action";

const initialState = {};

export default function planReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLANS:
      return action.payload;
    case ADD_PLAN:
      return [action.payload, ...state];
    case UPDATE_PLAN:
      return state.map((plan) => {
        if (plan._id === action.payload.planId) {
          return {
            ...plan,
            plan: action.payload.plan,
          };
        } else return plan;
      });
    case DELETE_PLAN:
      return state.filter((plan) => plan._id !== action.payload.planId);
    default:
      return state;
  }
}
