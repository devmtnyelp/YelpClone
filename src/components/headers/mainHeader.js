import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mainSearch } from '../../ducks/search/searchReducer';

import './mainHeader.css';
import picture from './yelp.png';
import magnifying_glass from './magnifying_glass.png';


class mainHeader extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      location: ''
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
                <Link to="/createreview"
                className="Link2">
                  Write a Review
                </Link>
                <Link to="/events"
                className="Link2">
                  Events
                </Link>
                <Link to="/talk"
                className="Link2">
                  Talk
                </Link>
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
                      `/searchresults/?location=${
                        this.state.location
                      }&?search=${this.state.search}`
                    );
                  }}
                  className="search-button"
                >
                  <img src={magnifying_glass} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="below-search">
            <Link to="/searchresults/?location=dallas&?search=restaurants"
              className="Link">
               Restaurants 
            </Link>
            <Link to="/searchresults/?location=dallas&?search=nightlife"
            className="Link">
               Nightlife
            </Link>
            <Link to="/searchresults/?location=dallas&?search=home%20Services"
            className="Link">
               Home Services
            </Link>
            <Link to="/searchresults/?location=dallas&?search=delivery"
            className="Link">
               Delivery

            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, { mainSearch })(mainHeader));
