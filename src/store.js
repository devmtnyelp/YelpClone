import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./ducks/authentication/reducer";
import eventReducer from "./ducks/events/reducer";
import searchReducer from "./ducks/search/searchReducer";

const store = createStore(
  combineReducers({ userReducer, eventReducer, searchReducer }),
  composeWithDevTools(applyMiddleware(promiseMiddleware()))
);

export default store;
