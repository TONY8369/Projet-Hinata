import axios from "axios";

// concernent les evenements //
export const GET_PLANS = "GET_PLANS";
export const GET_ALL_PLANS = "GET_ALL_PLANS";
export const ADD_PLAN = "ADD_PLAN";

export const UPDATE_PLAN = "UPDATE_PLAN";
export const DELETE_PLAN = "DELETE_PLAN";
// Commentaire //

// Erreur //
export const GET_PLANS_ERRORS = "GET_PLANS_ERRORS";

export const getPlans = (num) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/bonPlanAdmin/`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_PLANS, payload: array });
        dispatch({ type: GET_ALL_PLANS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addPlan = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/bonPlanAdmin/`, data)
      .then((res) => {
        dispatch({ type: ADD_PLAN, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const updatePlan = (planId, plan) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/bonPlanAdmin/${planId}`,
      data: { plan },
    })
      .then((res) => {
        dispatch({ type: UPDATE_PLAN, payload: { plan, planId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePlan = (planId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/bonPlanAdmin/${planId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_PLAN, payload: { planId } });
      })
      .catch((err) => console.log(err));
  };
};
