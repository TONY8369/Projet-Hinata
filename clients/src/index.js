import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { getPosts } from "./actions/postUser.action";
import { getUsers } from "./actions/users.action";
import { getEvents } from "./actions/eventAdmin.action";
import { getAdmins } from "./actions/admins.action";
import { getPlans } from "./actions/planAdmin.action";
import { getPlannings } from "./actions/planningAdmin.action";
import { getNotes } from "./actions/noteUser.action";
import { getReservations } from "./actions/reservationUser.action";
import { getCommandes } from "./actions/commandeUser.action";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

store.dispatch(getUsers());
store.dispatch(getAdmins());
store.dispatch(getPosts());
store.dispatch(getEvents());
store.dispatch(getPlans());
store.dispatch(getPlannings());
store.dispatch(getNotes());
store.dispatch(getReservations());
store.dispatch(getCommandes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
