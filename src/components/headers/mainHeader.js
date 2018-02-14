import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./mainHeader.css";
import picture from "./yelp.png";

export default class mainHeader extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      value: ""
    };
    this.updateSearch = this.updateSearch.bind(this);
  }
  updateSearch(val) {
    this.setState({ search: val });
  }
  updateValue(val) {
    this.setState({ value: val });
  }

  render() {
    return (
      <div className="background">
        <div>
          <div>
            <div className="flex-header">
              <div className="top-left">
                <Link to="/writeReview">
                  <a>Write a Review</a>
                </Link>
                <Link to="/events">
                  <a>Events</a>
                </Link>
                <Link to="/Talk">
                  <a>Talk</a>
                </Link>
              </div>
              <div className="buttons">
                <button onClick={() => this.props.history.push("/login")}>
                  Login
                </button>
                <button onClick={() => this.props.history.push("/register")}>
                  Sign up
                </button>
              </div>
            </div>
        <div className="center-menu">
            <img className="yelp-pic" src={picture} />
        </div>
            <div className="search-bar">
                <label>Find<input className="search-input" type="text" placeholder="burgers, barbers, spas, handymen...                                                   |" /></label>
                <label>Near<input className="search-input" type="text" placeholder="Downtown, Dallas, TX" /></label>
                <button>Search</button>
            </div>
        </div>
        <div className="below-search">
          <Link to="/searchRestaurants">
            {" "}
            <a> Restaurants </a>{" "}
          </Link>
          <Link to="/searchNightlife">
            {" "}
            <a> Nightlife </a>{" "}
          </Link>
          <Link to="/searchHomeServices">
            {" "}
            <a> Home Services </a>{" "}
          </Link>
          <Link to="/searchDelivery">
            {" "}
            <a> Delivery </a>{" "}
          </Link>
        </div>
        </div>
      </div>
    );
  }
}
