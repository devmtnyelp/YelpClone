import axios from 'axios';
import { firebase, firestore } from '../../fire';

const initialState = {
  user: {},
  uid: '',
  email: '',
  password: '',
  isLoading: false,
  didError: false,
  userDetail: ''
};

const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
const GET_USER = 'GET_USER';

export function createAccount(email, password) {
  return {
    type: CREATE_ACCOUNT,
    payload: firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        if ((error.code = 'auth/email-already-in-use')) {
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(result => {
              console.log(result);
            });
        }
        this.setState({ error: error.message });
      })
  };
}

export function getUser(userid) {
  console.log(userid);
  return {
    type: GET_USER,
    payload: axios
      .get(`/api/user/${userid}`)
      .then(response => {
        return response.data[0];
      })
      .catch(console.log)
  };
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${CREATE_ACCOUNT}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });
    case `${CREATE_ACCOUNT}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload.data
      });

    case `${CREATE_ACCOUNT}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });

    case `${GET_USER}_FULFILLED`:
      console.log(action);
      return Object.assign({}, state, { userDetail: action.payload });

    default:
      return state;
  }
}
