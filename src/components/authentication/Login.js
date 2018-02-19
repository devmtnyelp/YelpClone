import React, { Component } from "react";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { loginUser } from "../../ducks/authentication/loginReducer";

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

        <button
          onClick={() => {
            this.props.loginUser(email, password);
          }}
        >
          Login
        </button>
        <img
          src={require("./resources/signup_illustrationYelp.png")}
          alt="picua"
        />
        <div />
      </div>
    );
  }
}

const mapStateToProps = ({ loginUserReducer }) => ({
  isLoading: loginUserReducer.isLoading,
  userid: loginUserReducer.userid
});

export default connect(mapStateToProps, { loginUser })(Login);
