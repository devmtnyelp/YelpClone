import React, { Component } from "react";
import { Link } from "react-router-dom";
import { mainSearch } from "../../ducks/search/searchReducer";
import { connect } from "react-redux";

import "./searchHeader.css";
import picture from "./yelp.png";

export default class SearchHeader extends Component {
  constructor() {
    super();

    this.state= {
        search: ""
    }
  }

  render(){
    const { search, location } = this.state;
      return(
          <div>
          <div  className="main-div">
          <Link to ="/">
            <img className="yelp-pic2" src={picture} />
          </Link>
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
                mainSearch(search, location);
                window.location.href = `http://localhost:3000/searchresults/?location=${this.state.location}&?search=${
                                          this.state.search
                                        }`
                // this.props.history.push(
                //   `/searchresults/?location=${this.state.location}&?search=${
                //     this.state.search
                //   }`
                // );
              }}
            >
              Search
            </button>
          </div>
            <button className="signup" onClick={() => this.props.history.push("/register")}>
            Sign up
            </button>
          </div>
            <div className="second-div">
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
                <Link to="/writeReview=">
                    {" "}
                    <a> Write a Review </a>{" "}
                </Link>
                <Link to="/Events">
                     {" "}
                     <a> Events </a>{" "}
                </Link>
                <Link to="/Talk">
                      {" "}
                      <a> Talk </a>{" "}
                </Link>
                <button className="login-button" onClick={() => this.props.history.push("/login")}>
                    Login
                </button>
            </div>

          </div>

      )

    
  }
}