import React, { Component } from "react";
import SearchHeader from "../headers/searchHeader";
import { connect } from "react-redux";
import { saveUserInfo } from "../../ducks/authentication/loginOrCreateReducer";
import "./userInfo.css";

class EditUserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      city: "",
      state: "",
      avatar: ""
    };
  }

  render() {
    const userid = this.props.match.params.userid;
    const { name, city, state, avatar } = this.state;
    return (
      <div>
        <SearchHeader />
        <p>user information</p>
        <div className="user-info">
          <input
            className="user-name"
            type="text"
            placeholder="name"
            onChange={event => {
              this.setState({ name: event.target.value });
            }}
          />
          <input
            className="city-name"
            type="text"
            placeholder="city"
            onChange={event => {
              this.setState({ city: event.target.value });
            }}
          />
          <input
            className="state"
            type="text"
            placeholder="state"
            onChange={event => {
              this.setState({ state: event.target.value });
            }}
          />
          <input
            className="avatar"
            type="text"
            placeholder="avatar"
            onChange={event => {
              this.setState({ avatar: event.target.value });
            }}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            this.props.saveUserInfo(
              this.props.match.params.userid,
              this.state.name,
              this.state.city,
              this.state.state,
              this.state.avatar
            );
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

export default connect(mapStateToProps, { saveUserInfo })(EditUserInfo);
