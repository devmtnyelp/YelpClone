
import { firebase } from '../../fire';

const initialState = {
  userid: '',
  email: '',
  isLoading: false,
  didError: false,
};

const LOGIN_USER = 'LOGIN_USER';

export function loginUser(email, password) {
  return {
    type: LOGIN_USER,
    payload: firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => result.uid)
      .catch(console.log('Username or Password incorrect.')),
  };
}

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case `${LOGIN_USER}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case `${LOGIN_USER}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        userid: action.payload,
      });

    case `${LOGIN_USER}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true,
      });

    default:
      return state;
  }
}
