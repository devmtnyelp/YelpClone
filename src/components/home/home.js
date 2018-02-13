import React, { Component } from "react";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import MainHeader from '../headers/mainHeader';
// import picture from "./resources/signup_illustrationYelp.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return  (
    <MainHeader />
    )
  }
}
