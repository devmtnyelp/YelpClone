
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { mainSearch } from "../../ducks/search/searchReducer";
import { connect } from "react-redux";

import './searchHeader.css';
import picture from './yelp.png';

class SearchHeader extends Component {
  constructor() {
    super();




    this.state= {
        search: ""

    }

  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    const { search, location } = this.state;
    return (
      <div className="body">
        <div className="main-div">
          <Link to="/">
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
              className="search-button"
              onClick={() => {
                this.props.mainSearch(location, search);
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

          <button
            className="signup"
            onClick={() => this.props.history.push('/register')}

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

