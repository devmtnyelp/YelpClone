import React, { Component } from "react";
import { firebase, firestore } from "../../fire";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser() {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
      })
      .catch(console.log("Username or Password incorrect."));
  }

  render() {
    return (
      <div className="signUpBox">
        <div>test</div>
        <input
          placeholder="Email"
          onChange={e => {
            this.setState({ email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
        />

        <button onClick={this.createAccount}>Login</button>

        <div>
          <img src={require("./resources/signup_illustrationYelp.png")} />
        </div>
      </div>
    );
  }
}
