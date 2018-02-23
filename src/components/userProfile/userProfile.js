import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserDetails, getDetails } from "../../ducks/events/reducer";
import UserReviews from "./userReviews";
import "./userProfile.css";
import SearchHeader from "../headers/searchHeader";
import axios from "axios";
import loadinggif from './warm_grey_spinner.gif'
import {Link, withRouter} from 'react-router-dom';

let arr = [];
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.getUserDetails(userId).then(response => {
      response.value.data.reviews.map((val, i) => {
        console.log(val.restaurantid);
        axios
          .get(`/api/getDetails?restaurantId=${val.restaurantid}`)
          .then(response => {
            console.log("ding");
            this.setState({
              arr: this.state.arr.concat([
                <UserReviews {...val} {...response} {...i} />
              ])
            });
            console.log(this.state.arr);
          });
      });
    });
  }
  render() {
    return (
      <div>
      {      console.log(this.props.match)
      }
        <SearchHeader />
        {this.props.eventReducer.info.data && (
          <div>
          <div>
            <div className="topShelf">
              <img
                id="userProfilePic"
                src={this.props.eventReducer.info.data.user[0].avatar}
              />
              <div id="userInfoContainerDiv">
                <h1>{this.props.eventReducer.info.data.user[0].name}</h1>
                <p className="userLocation">
                  {this.props.eventReducer.info.data.user[0].city},{" "}
                  {this.props.eventReducer.info.data.user[0].state}
                </p>
                <ul className="userStats">
                <li className="countLi">
                  <svg
                    fill='#f15c00'
                    id="24x24_friends"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                  >
                    <g>
                      <path d="M10.824 13.817l-2.482 5.946c-.69 1.65-2.995 1.65-3.684 0l-2.482-5.946C1.618 12.48 2.586 11 4.018 11h4.964c1.432 0 2.4 1.48 1.842 2.817zM6.5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      <path
                        d="M21.824 13.817l-2.482 5.946c-.69 1.65-2.995 1.65-3.684 0l-2.482-5.946c-.558-1.337.41-2.817 1.842-2.817h4.964c1.432 0 2.4 1.48 1.842 2.817zM17.5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                        opacity=".502"
                      />
                    </g>
                  </svg>
                  <p className="userStatNumber">2</p>
                  <p> Friends </p>
                </li>
                <li className="countLi">
                  <svg
                    fill='#f15c00'
                    id="24x24_review"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                  >
                    <path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6zm-5.88 10.428l-3.16-1.938-3.05 2.01.59-3.457L7 10.596l3.457-.505L11.96 6.5l1.582 3.59 3.458.506-2.5 2.447.62 3.385z" />
                  </svg>
                  <p className="userStatNumber">{this.props.eventReducer.info.data.reviews.length}</p>
                  
                  <p> Reviews </p>
                </li>
                <li className="countLi">
                  <svg
                    fill='#f15c00'
                    id="24x24_camera"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                  >
                    <path d="M19 20H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.184A2.99 2.99 0 0 1 10 4h4a2.99 2.99 0 0 1 2.816 2H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zM12.005 8.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <p className="userStatNumber">0</p>
                  
                  <p> Photos </p>
                </li>
              </ul>
              </div>
              <div className="topShelfNav">
              <div className="topShelfNavList">
              <Link to={`/edituser/userId=${this.props.eventReducer.info.data.user[0].userid}`}>
              <p>Edit Profile</p>
              </Link>
              </div>
              </div>
              </div>
            </div>
            <div className="mainContentContainer">
              <div className="profileNav">
              </div>
              <div className="userReviewContainer">
              {this.state.arr.length < this.props.eventReducer.info.data.reviews.length && <img src={loadinggif} style={{"width": "80px", 'margin-left':'30px'}} />}
              {this.state.arr.length === this.props.eventReducer.info.data.reviews.length && this.state.arr}
              {console.log(this.props)}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(getUserDetails) {
  return getUserDetails;
}
export default withRouter(connect(mapStateToProps, { getDetails, getUserDetails })(
  UserProfile
))
