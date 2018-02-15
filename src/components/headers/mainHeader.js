import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mainSearch } from "../../ducks/search/searchReducer";

import "./mainHeader.css";
import picture from "./yelp.png";

class mainHeader extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      location: ""
    };
  }

  render() {
    const { search, location } = this.state;
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
              <label>
                Find<input
                  className="search-input"
                  type="text"
                  onChange={event =>
                    this.setState({ search: event.target.value })
                  }
                  placeholder="burgers, barbers, spas, handymen...                                                   |"
                />
              </label>
              <label>
                Near<input
                  className="search-input"
                  type="text"
                  onChange={event =>
                    this.setState({ location: event.target.value })
                  }
                  placeholder="Downtown, Dallas, TX"
                />
              </label>
              <button
                onClick={() => {
                  this.props.mainSearch(search, location);
                  this.props.history.push(
                    `/searchresults/?location=${this.state.location}&?search=${
                      this.state.search
                    }`
                  );
                }}
              >
                Search
              </button>
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

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, { mainSearch })(mainHeader));
