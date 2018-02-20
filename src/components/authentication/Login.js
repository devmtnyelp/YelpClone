import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../../ducks/authentication/loginReducer";
import LoginHeader from "../headers/loginHeader";
import Footer from "../footer/footer";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  componentWillMount() {
    if (this.props.userid) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.userid) {
      this.props.history.push("/");
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <LoginHeader />
        <div className="signUpBox">
          <div className="input-flex">
            <p className="login-title">Log In To Yelp</p>
            <p className="sign-up">
              New to Yelp?
              <Link to="/register" className="register">
                Sign up
              </Link>
            </p>
            <p className="terms">
              By logging in, you agree to Yelp’s
              <span className="span">Terms of Service</span> and 
              <span className="span"> Privacy Policy.</span>
            </p>
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
                this.props.loginUser(email, password);
              }}
            >
              Login
            </button>
          </div>
          <div className="login-img">
            <img
              src={require("./resources/signup_illustrationYelp.png")}
              alt="picua"
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ loginUserReducer }) => ({
  isLoading: loginUserReducer.isLoading,
  userid: loginUserReducer.userid
});

export default connect(mapStateToProps, { loginUser })(Login);
