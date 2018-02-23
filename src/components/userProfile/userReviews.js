import React, { Component } from "react";
import { connect } from "react-redux";
// import burst from "../footer/images/burst_desktop_xsmall_outline.png";
import { getUserDetails, getDetails } from "../../ducks/events/reducer";
import Star from "../businessDetails/star";
// import axios from "axios";

// var arr = [];
var d = new Date(0);
const timeFormater = (input) => {
  console.log(input);
  d = new Date(0);
  d.setUTCSeconds(input);
  var x = JSON.stringify(d);
  var arr = x.split("T");

  arr[0] = arr[0].split("");
  arr[0].splice(0, 1);
  arr[0] = arr[0].join("");

  arr[1] = arr[1].split("");
  arr[1].splice(8, 6);
  arr[1] = arr[1].join("");

  return arr.join(" ");
};

class UserReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      biz: {}
    };
  }

  componentDidMount() {
    console.log("restaurantidk:", this.props.restaurantid);
  }

  render() {
    var id = this.props.id;
    return (
      <div className="greaterUserReviewContainerMarginBottom">
      <div key={this.props.i} className="userReview">
        <img
          className="restaurantImg"
          src={this.props.data.details.image_url}
          alt=""
        />
        <div className="restaurantInfo">
          <h3 className="restaurantTitle">{this.props.data.details.name}</h3>
          <p className="restaurantLocation">{this.props.data.details.location.address1}</p>
          <p className="restaurantLocation">
            {this.props.data.details.location.city},{" "}
            {this.props.data.details.location.state}{" "}
            {this.props.data.details.location.zip_code}
          </p>
          </div>
          </div>
          <div className="starAndDate">
            <Star rev={this.props.rating} />{" "}
            <p className="reviewDate">
              {timeFormater(this.props.time)}
            </p>
          </div>
          <p className="reviewBody">{this.props.reviewbody}</p>        
      </div>
    );
  }
}

const mapStateToProps = ({ eventReducer }) => ({
  eventReducer
});

export default connect(mapStateToProps, { getDetails, getUserDetails })(
  UserReviews
);
