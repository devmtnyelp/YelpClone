import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './resultCard.css';
import Star from '../businessDetails/star';


export default class resultCard extends Component {
  render() {
    console.log('PROPS:', this.props);
    return (

      <div>
        <div className="result-card">
          <div className="img-border">
            <img
              className="results-img"
              src={this.props.obj.image_url}
              alt=""
            />
          </div>
          <div className="name-rating">
            <div className="results-name">{this.props.obj.name}</div>
            <div className="results-rating">
              <Star rev={this.props.obj.rating} />
            </div>
          </div>
          <div className="result-location">
            <div className="address-flex">
              {this.props.obj.location.display_address[0]}
            </div>
            <div className="name-rating">
              <div className="results-name">{this.props.obj.name}</div>
              <div className="results-rating">
                <Star rev={this.props.obj.rating} />
              </div>
            </div>
            <div className="result-location">
              <div className="address-flex">
                {this.props.obj.location.display_address[0]}
              </div>
              <div className="address-flex">
                {this.props.obj.location.display_address[1]}
              </div>
              <div className="address-flex">
                {this.props.obj.location.display_address[2]}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

// <Link to="{businessdetails}/{this.props.obj.id}"
