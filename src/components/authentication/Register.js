
import React, { Component } from "react";
import picture from "./resources/signup_illustrationYelp.png";
import "./styles.css";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { createAccount } from '../../ducks/authentication/loginOrCreateReducer';

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
      <div className="main-content">
        <div className="signup-wrapper">
          <div className="sign-up-form-box">
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

          <button
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
    );
  }
}

const mapStateToProps = ({ userReducer }) => ({
  isLoading: userReducer.isLoading,
  userid: userReducer.userid,
});

export default withRouter(
  connect(mapStateToProps, { createAccount })(Register));
