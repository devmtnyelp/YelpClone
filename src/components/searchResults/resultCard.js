import React, { Component } from "react";
import "./resultCard.css";

export default class resultCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="result-card">
          <div className="img-border">
            <img className="results-img" src={this.props.obj.image_url} />
          </div>
          <div className="name-rating">
            <div className="results-name">{this.props.obj.name}</div>
            <div className="results-rating">{this.props.obj.rating}</div>
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
    );
  }
}
