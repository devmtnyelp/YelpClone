import React from "react";
import { firebase } from "../../fire";

const SignOut = () => {
  return (
    <button
      className="signOutBtn"
      onClick={() => {
        firebase
          .auth()
          .signOut()
          .then(() => window.location.reload());
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
