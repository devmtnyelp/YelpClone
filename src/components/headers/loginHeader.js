import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import picture from './yelp.png';
import './loginHeader.css';

export default class loginHeader extends Component {
  render() {
    return (
      <div className="lonely-div">
        <Link to="/">
          <img className="yelp-pic3" src={picture} alt="" />
        </Link>
      </div>
    );
  }
}
