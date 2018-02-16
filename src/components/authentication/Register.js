
import React, { Component } from "react";
import picture from "./resources/signup_illustrationYelp.png";
import "./styles.css";
import {withRouter} from "react-router-dom"
import { connect } from "react-redux";
import {
  createAccount,
  storeUserInfoAtHeroku
} from '../../ducks/authentication/reducer';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      loading: true
    };
  }

  render() {
    const { email, password } = this.state;
    const { userid } = this.props;
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

          <button
            onClick={() => {
              this.props.createAccount(email, password);
              // this.props.storeUserInfoAtHeroku(email, userid);
            }}
          >
            Create Account
          </button>

          <div className="picture">
            <img src={picture} alt="picua" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => ({
  isLoading: userReducer.isLoading,
  userid: userReducer.userid
});

export default withRouter(
  connect(mapStateToProps, { createAccount, storeUserInfoAtHeroku })(Register)
);