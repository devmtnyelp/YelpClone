
import React, { Component } from "react";
import picture from "./resources/signup_illustrationYelp.png";
import "./styles.css";
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { createAccount } from '../../ducks/authentication/loginOrCreateReducer';
import LoginHeader from "../headers/loginHeader";
import Footer from "../footer/footer";

import "./Register.css" // Most styling borrowed from Login Component //

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      loading: true,
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
      <LoginHeader />
      <div  className="register-content">
        <div className="signup-wrapper">
        <p className="login-title">Sign Up For Yelp</p>
        <p className="sign-up">
          Connect with great local businesses
        </p>
        <p className="terms">
          By logging in, you agree to Yelp’s
          <span className="span">Terms of Service</span> and 
          <span className="span"> Privacy Policy.</span>
        </p>
          <div className="sign-up-form-box">
          <input
            className="input"
            placeholder="Email"
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />

          <button
            className="login-button2"
            onClick={() => {
              this.props.createAccount(email, password);
            }}
          >
            Create Account
          </button>
          </div>
          </div>

          <div className="picture">
          <img src={picture} alt="picua" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => ({
  isLoading: userReducer.isLoading,
  userid: userReducer.userid,
});

export default withRouter(
  connect(mapStateToProps, { createAccount })(Register));
