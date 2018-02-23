import React, { Component } from 'react';
import './resultCard.css';
import Star from '../businessDetails/star';
import { Link } from 'react-router-dom';
export default class ResultCard extends Component {
  render() {
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
            <div className="results-name">
              {this.props.number + 1 + '. '}
              <Link id="link" to={'/businessdetails/' + this.props.obj.id}>
                {this.props.obj.name}
              </Link>
            </div>
            <div className="results-rating">
              <Star rev={this.props.obj.rating} />
              <span className="count">
                {this.props.obj.review_count} reviews
              </span>
            </div>
            <div className="price-category">
              {this.props.obj.price} • {this.props.obj.categories[0].title}
              {this.props.obj.categories[1] && ', '}
              {this.props.obj.categories[1] &&
                this.props.obj.categories[1].title}
              {this.props.obj.categories[2] && ', '}
              {this.props.obj.categories[2] &&
                this.props.obj.categories[2].title}
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
            <div>{this.props.obj.display_phone}</div>
          </div>
        </div>
      </div>
    );
  }
}