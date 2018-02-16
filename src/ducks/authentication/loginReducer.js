import { firebase } from "../../fire";

const initialState = {
  email: "",
  userid: "",
  isLoading: false,
  didError: false
};

const LOGIN_USER = "LOGIN_USER";

export function loginUser(email, password) {
  console.log("gooing");
  return {
    type: LOGIN_USER,
    payload: firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        return result.uid;
      })
      .catch(console.log)
  };
}

export default function loginUserReducer(state = initialState, action) {
  switch (action.type) {
    case `${LOGIN_USER}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });
    case `${LOGIN_USER}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        userid: action.payload
      });
    case `${LOGIN_USER}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });
    default:
      return state;
  }
}
