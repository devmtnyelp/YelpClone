import axios from "axios";
import { firebase } from "../../fire";

const initialState = {
  userid: "",
  email: "",
  isLoading: false,
  didError: false,
  userInfo: ""
};
const CREATE_ACCOUNT = "CREATE_ACCOUNT";
const SAVE_USER_INFO = "SAVE_USER_INFO";

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
            userid: result.uid,
            name: "Anonymous",
            city: "Dallas",
            state: "TX",
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCxVKdxrVTrvlKu2ebSZvCWwfwooNkG9s4N14U3vjJJJNFLWB"
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

export function saveUserInfo(userid, name, city, state, avatar) {
  return {
    type: SAVE_USER_INFO,
    payload: axios
      .post("/api/saveuserinfo", {
        name,
        city,
        state,
        userid
      })
      .then(response => {
        return response.data;
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

    case `${SAVE_USER_INFO}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });
    case `${SAVE_USER_INFO}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        userInfo: action.payload
      });
    case `${SAVE_USER_INFO}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });
    default:
      return state;
  }
}
