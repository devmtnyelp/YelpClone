import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./ducks/authentication/loginOrCreateReducer";
import eventReducer from "./ducks/events/reducer";
import searchReducer from "./ducks/search/searchReducer";
import loginUserReducer from './ducks/authentication/loginReducer';

const store = createStore(
  combineReducers({ userReducer, loginUserReducer, eventReducer, searchReducer }),
  composeWithDevTools(applyMiddleware(promiseMiddleware())),
);

export default store;


//business_details reducer has to be fixed;