import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { mainSearch } from "../../ducks/search/searchReducer";
import { connect } from "react-redux";

import "./searchHeader.css";
import picture from "./yelp.png";
import alert from "./alert.png";
import message from "./message.png";
import magnifying_glass from "./magnifying_glass.png";

class SearchHeader extends Component {
  constructor() {
    super();

    this.state = {
      search: ""
    };
  }
  render() {
    const { search, location } = this.state;
    return (
      <div className="body">
        <div className="main-div">
          <Link to="/">
            <img className="yelp-pic2" src={picture} alt="" />
          </Link>
          <div className="search-form">
            <div className="search-bar">
              <span>Find</span>
              <input
                type="text"
                placeholder="burgers, barbers, spas, handymen..."
                onChange={event =>
                  this.setState({ search: event.target.value })
                }
              />
              <span>Near</span>
              <input
                type="text"
                placeholder="Dallas, TX"
                onChange={event =>
                  this.setState({ location: event.target.value })
                }
              />
              <button
                onClick={() => {
                  this.props.mainSearch(location, search);
                  this.props.history.push(
                    `/searchresults/?location=${this.state.location}&?search=${
                      this.state.search
                    }`
                  );
                }}
                className="search-button"
              >
                <img src={magnifying_glass} alt="" />
              </button>
            </div>
          </div>
          <img src={message} className="message" alt="" />

          <img src={alert} className="alert" alt="" />

          <button
            className="signup"
            onClick={() => this.props.history.push("/register")}
          >
            Sign up
          </button>
        </div>
        <div className="second-div">
          <div className="links">
            <Link to="/searchRestaurants">Restaurants</Link>
            <Link to="/searchNightlife">Nightlife</Link>
            <Link to="/searchHomeServices">Home Services</Link>
            <Link to="/writeReview=">Write a Review</Link>
            <Link to="/Events">Events</Link>
            <Link to="/Talk">Talk</Link>
          </div>
          <button
            className="login-button"
            onClick={() => this.props.history.push("/login")}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(
  connect(mapStateToProps, { mainSearch })(SearchHeader)
);
