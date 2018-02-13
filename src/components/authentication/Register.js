import React, { Component } from "react";
import { firebase, firestore } from "../../fire";
import picture from "./resources/signup_illustrationYelp.png";
import "./styles.css";
import { connect } from "react-redux";
import { createAccount } from "../../ducks/reducer";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      loading: true
    };
    // this.createAccount = this.createAccount.bind(this);
  }

  componentDidMount() {}

  render() {
    const { email, password } = this.state;

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

          <button onClick={this.props.createAccount}>Create Account</button>

          <div className="picture">
            <img src={picture} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { createAccount })(Register);
