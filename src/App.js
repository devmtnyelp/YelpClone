import React, { Component } from "react";
import { geolocated } from "react-geolocated";
import { geoLocation } from "./ducks/events/reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./App.css";
import Routes from "./routes";

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.coords) {
      this.props.geoLocation(nextProps.coords);
    }
  }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default withRouter(
  geolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  })(connect(null, { geoLocation })(App))
);
