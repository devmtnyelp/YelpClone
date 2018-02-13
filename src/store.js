import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './ducks/authentication/reducer';
import eventReducer from './ducks/events/reducer';

const store = createStore(
  combineReducers({ userReducer, eventReducer }),
  composeWithDevTools(applyMiddleware(promiseMiddleware())),
);

export default store;
