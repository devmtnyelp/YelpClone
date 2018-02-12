import React, { Component } from "react";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
// import picture from "./resources/signup_illustrationYelp.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push("/login")}>Login</button>
        <button onClick={() => this.props.history.push("/register")}>
          Sign up
        </button>
      </div>
    );
  }
}
