import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { firebase, firestore } from '../../fire';

import picture from './resources/signup_illustrationYelp.png';
import './styles.css';

import { createAccount } from '../../ducks/authentication/reducer';

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
          <div>test</div>
          <input
            placeholder="Email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
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
  userid: userReducer.userid,
});

export default connect(mapStateToProps, { createAccount })(Register);
