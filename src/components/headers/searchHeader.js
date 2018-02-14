import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './searchHeader.css';
import picture from './yelp.png';

export default class SearchHeader extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="main-div">
          <img className="yelp-pic2" src={picture} />
          <div className="search">
            <label>
              Find<input
                className="search-input"
                type="text"
                placeholder="burgers, barbers, spas, handymen...                                                   |"
              />
            </label>
            <label>
              Near<input
                className="search-input"
                type="text"
                placeholder="Downtown, Dallas, TX"
              />
            </label>
            <button>Search</button>
          </div>
          <button
            className="signup"
            onClick={() => this.props.history.push('/register')}
          >
            Sign up
          </button>
        </div>
        <div className="second-div">
          <Link to="/searchRestaurants">
            {' '}
            <a href="#"> Restaurants </a>{' '}
          </Link>
          <Link to="/searchNightlife">
            {' '}
            <a href="#"> Nightlife </a>{' '}
          </Link>
          <Link to="/searchHomeServices">
            {' '}
            <a href="#"> Home Services </a>{' '}
          </Link>
          <Link to="/writeReview=">
            {' '}
            <a href="#"> Write a Review </a>{' '}
          </Link>
          <Link to="/Events">
            {' '}
            <a href="#"> Events </a>{' '}
          </Link>
          <Link to="/Talk">
            {' '}
            <a href="#"> Talk </a>{' '}
          </Link>
          <button
            className="login-button"
            onClick={() => this.props.history.push('/login')}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
