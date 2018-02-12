import React, { Component } from "react";
import { firebase, firestore } from "../../fire";
import picture from "./resources/signup_illustrationYelp.png";
import "./styles.css";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      loading: true
    };
    this.createAccount = this.createAccount.bind(this);
  }

  createAccount() {
    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        if ((error.code = "auth/email-already-in-use")) {
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(result => {
              console.log(result);
            });
        }
        this.setState({ error: error.message });
      });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="main-content">
        <div className="signup-wrapper">
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

          <button onClick={this.createAccount}>Create Account</button>

          <div className="picture">
            <img src={picture} />
          </div>
        </div>
      </div>
    );
  }
}
