import React, { Component } from "react";
import "./star.css";

class Star extends Component {
  render() {
    function starFinder(rating) {
      let quantity;
      if (rating === 1) {
        quantity = "1";
      } else if (rating === 1.5) {
        quantity = "1-half";
      } else if (rating === 2) {
        quantity = "2";
      } else if (rating === 2.5) {
        quantity = "2-half";
      } else if (rating === 3) {
        quantity = "3";
      } else if (rating === 3.5) {
        quantity = "3-half";
      } else if (rating === 4) {
        quantity = "4";
      } else if (rating === 4.5) {
        quantity = "4-half";
      } else if (rating === 5) {
        quantity = "5";
      }
      return quantity;
    }
    return (
      <div>
        <div
          className={
            "i-stars " +
            "i-stars--regular-" +
            starFinder(this.props.rev) +
            " rating-large"
          }
          title={" star rating"}
        >
          <img
            className="offscreen"
            height="303"
            src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png"
            width="84"
            alt="5.0 star rating"
          />
        </div>
      </div>
    );
  }
}

export default Star;
