import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mainSearch } from '../../ducks/search/searchReducer';
import './mainHeader.css';
import picture from './yelp.png';

class mainHeader extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      location: 'Dallas, TX'
    };
  }

  render() {
    console.log('LOCATION STATE:', this.state.location);
    const { search, location } = this.state;

    return (
      <div className="background">
        <div>
          <div>
            <div className="flex-header">
              <div className="top-left">
                <Link to="/writeReview">Write a Review</Link>
                <Link to="/events">Events</Link>
                <Link to="/Talk">Talk</Link>
              </div>
              <div className="buttons">
                <button
                  className="navlink"
                  onClick={() => this.props.history.push('/login')}
                >
                  Log in
                </button>
                <button
                  className="sign-up sign-up--primary"
                  onClick={() => this.props.history.push('/register')}
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="center-menu">
              <img className="yelp-pic" src={picture} alt="" />
            </div>
            <div className="search-form">
              <div className="search-bar">
                <span>Find</span>
                <input
                  type="submit"
                  placeholder="burgers, barbers, spas, handymen..."
                  onChange={event =>
                    this.setState({ search: event.target.value })
                  }
                />
                <span>Near</span>
                <input
                  type="submit"
                  placeholder="Dallas, TX"
                  value={this.state.location || this.props.geoLocale}
                  onChange={event =>
                    this.setState({ location: event.target.value })
                  }
                />
                <button
                  type="submit"
                  onClick={() => {
                    this.props.mainSearch(location, search);
                    this.props.history.push(
                      `/searchresults/?location=${
                        this.state.location
                      }&?search=${this.state.search}`
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
          </div>
          <div className="below-search">
            <Link
              to={`/searchresults/?location=${location}&?search=restaurants`}
            >
              Restaurants
            </Link>
            <Link to="/searchresults/?location=dallas&?search=nightlife">
              Nightlife
            </Link>
            <Link to="/searchresults/?location=dallas&?search=home%20Services">
              Home Services
            </Link>
            <Link to="/searchresults/?location=dallas&?search=delivery">
              Delivery
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ eventReducer }) {
  console.log(eventReducer);
  return { geoLocale: eventReducer.geoLocale };
}

export default withRouter(connect(mapStateToProps, { mainSearch })(mainHeader));
