import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../ducks/events/reducer';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }


  render() {
    const { email, password } = this.state;
    return (
      <div className="signUpBox">
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

        <button onClick={() => { this.props.loginUser(email, password); }}>Login</button>

        <div>
          <img src={require('./resources/signup_illustrationYelp.png')} alt="picua" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ eventReducer }) => ({
  isLoading: eventReducer.isLoading,
  userid: eventReducer.userid,
});

export default connect(mapStateToProps, { loginUser })(Login);
