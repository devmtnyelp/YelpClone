import React, { Component } from "react";
import "./resultCard.css";
import Star from "../businessDetails/star";
import { Link } from "react-router-dom";

export default class ResultCard extends Component {
  render() {
    console.log("PROPS resultCard: ", this.props);
    return (
      <Link to={"/businessdetails/" + this.props.obj.id}>
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
