import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { mainSearch } from '../../ducks/search/searchReducer';
import { connect } from 'react-redux';
import './searchHeader.css';
import picture from './yelp.png';


class SearchHeader extends Component {
  constructor() {
    super();

    this.state = {
      search: "",
      location: "Dallas, TX"
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
                <svg
                  fill="#fff"
                  id="24x24_search"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path d="M20.753 19.34l-4.295-4.297A7.46 7.46 0 0 0 18 10.5a7.5 7.5 0 1 0-7.5 7.5 7.46 7.46 0 0 0 4.543-1.542l4.296 4.295a1 1 0 1 0 1.412-1.414zM10.5 16A5.506 5.506 0 0 1 5 10.5C5 7.467 7.467 5 10.5 5S16 7.467 16 10.5 13.533 16 10.5 16z" />
                </svg>
              </button>
            </div>
          </div>

          <button
            className="signup"
            onClick={() => this.props.history.push("/register")}
          >
            Sign up
          </button>
        </div>
        <div className="second-div">
          <div className="links">
            <Link className="Link-to" to={`/searchresults/?location=${location}&?search=restaurants`}>Restaurants</Link>
            <Link className="Link-to" to={`/searchresults/?location=${location}&?search=nightlife`}>Nightlife</Link>
            <Link className="Link-to" to={`/searchresults/?location=${location}&?search=home%20Services`}>Home Services</Link>
            <Link className="Link-to" to="/writeReview=">Write a Review</Link>
            <Link className="Link-to" to={`/searchresults/?location=${location}&?search=events`}>Events</Link>
            <Link className="Link-to" to="/Talk">Talk</Link>
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

function mapStateToProps({ eventReducer }) {
  return { location: eventReducer.location };
}

export default withRouter(
  connect(mapStateToProps, { mainSearch })(SearchHeader)
);