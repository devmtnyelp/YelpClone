import axios from "axios";
import { firebase } from "../../fire";

const initialState = {
  userid: "",
  email: "",
  isLoading: false,
  didError: false
};
const CREATE_ACCOUNT = "CREATE_ACCOUNT";

export function createAccount(email, password) {
  return {
    type: CREATE_ACCOUNT,
    payload: firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        axios
          .post("/api/storeuserinfo", {
            email,
            userid: result.uid
          })
          .then(() => {
            console.log("saved");
            return result.uid;
          });
      })
      .catch(error => {
        if (error.code === "auth/email-already-in-use") {
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(result => {
              console.log("from reducer: ", result);
              return result.uid;
            });
        }
      })
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
        userid: action.payload
      });
    case `${CREATE_ACCOUNT}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });
    default:
      return state;
  }
}