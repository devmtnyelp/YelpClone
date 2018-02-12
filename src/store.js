import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./ducks/reducer";

const store = createStore(
  userReducer,
  applyMiddleware(createLogger(), promiseMiddleware())
);

export default store;
