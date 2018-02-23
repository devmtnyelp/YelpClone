import React, { Component } from "react";
import SearchHeader from "../headers/searchHeader";
import { connect } from "react-redux";
import { saveUserInfo } from '../../ducks/authentication/loginOrCreateReducer'

class userInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      city: "",
      state: ""
    };
  }

  render() {
    const { uid } = this.props.userid;
    const { name, city, state } = this.state;
    return (
      <div>
        <SearchHeader />
        <p>user information</p>
        <div className="user-info">
          <input
            type="text"
            onChange={event => {
              this.setState({ name: event.target.value });
            }}
          />
          <input
            type="text"
            onChange={event => {
              this.setState({ city: event.target.value });
            }}
          />
          <input
            type="text"
            onChange={event => {
              this.setState({ state: event.target.value });
            }}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            this.props.saveUserInfo(name, city, state, uid);
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

function mapStateToProps(userReducer) {
  return userReducer;
}

export default connect(mapStateToProps, { saveUserInfo })(userInfo);
