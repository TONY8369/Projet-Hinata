import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import adminReducer from "./admin.reducer";
import postUserReducer from "./postUser.reducer";
import errorReducer from "./error.reducer";
import allPostReducer from "./allPost.reducer";
import usersReducer from "./users.reducer";
import adminsReducer from "./admins.reducer";
import eventReducer from "./event.reducer";
import allEventReducer from "./allEvent.reducer";
import planReducer from "./plan.reducer";
import allPlanReducer from "./allPlan.reducer";
import planningReducer from "./planning.reducer";
import allPlanningReducer from "./allPlanning.reducer";
import noteUserReducer from "./noteUser.reducer";
import allNoteUserReducer from "./allNoteUser.reducer";
import reservationUserReducer from "./reservationUser.reducer";
import allReservationUserReducer from "./allReservationUser.reducer";
import commandeUserReducer from "./commandeUser.reducer";
import allCommandeUserReducer from "./allCommandeUser.reducer";

export default combineReducers({
  userReducer,
  adminReducer,
  postUserReducer,
  errorReducer,
  allPostReducer,
  usersReducer,
  adminsReducer,
  eventReducer,
  allEventReducer,
  planReducer,
  allPlanReducer,
  planningReducer,
  allPlanningReducer,
  noteUserReducer,
  allNoteUserReducer,
  reservationUserReducer,
  allReservationUserReducer,
  commandeUserReducer,
  allCommandeUserReducer,
});
