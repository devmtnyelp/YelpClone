import React, { Component } from "react";
import "./businessDetails.css";
import { connect } from "react-redux";
import SearchHeader from "../headers/searchHeader";
import Footer from "../footer/footer";
import BusinessReview from "./businessReview";
import { getDetails } from "../../ducks/events/reducer";
import { Link } from "react-router-dom";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from "./mapContainer";
import Star from "./star";

class businessDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const restaurantId = this.props.match.params.restaurantId;
    this.props.getDetails(restaurantId);
  }

  render() {
    function phoneFormatter(str) {
      str = str.split("");
      let string = str.slice(2);
      string.splice(0, 0, "(");
      string.splice(4, 0, ")");
      string.splice(8, 0, "-");
      string.splice(5, 0, " ");
      return string.join("");
    }
    console.log("biz-details this.props: ", this.props);
    return (
      <div>
        <SearchHeader />
        {this.props.loading ? null : (
          <React.Fragment>
            <div className="content-container">
              <div className="biz-page-header clearfix">
                <div className="biz-page-header-left">
                  <div className="u-space-t1">
                    <h1
                      id="black"
                      className="biz-page-title embossed-text-white shortenough"
                    >
                      {this.props.details.details &&
                        this.props.details.details.name}
                    </h1>
                    <div className="totheleft">
                      <Star
                        rev={
                          this.props.details.details &&
                          this.props.details.details.rating
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="biz-page-header-right u-relative">
                  <div className="biz-page-actions nowrap">
                    <Link
                      to={
                        "/createReview/" + this.props.match.params.restaurantId
                      }
                    >
                      <div className="ybtn ybtn--primary war-button">
                        <span>
                          <svg
                            fill="#fff"
                            id="icons"
                            height="24px"
                            width="24px"
                          >
                            <path d="M12 1.5l2.61 6.727 6.89.53-5.278 4.688 1.65 7.055L12 16.67 6.13 20.5l1.648-7.055L2.5 8.757l6.89-.53L12 1.5z" />
                          </svg>
                        </span>
                        Write a Review
                      </div>
                    </Link>
                    <span className="ybtn-group clearfix">
                      <a className="ybtn ybtn--small">
                        <svg
                          id="icons"
                          fill="#666"
                          height="18px"
                          viewBox="0 0 18 18"
                          width="18px"
                        >
                          <path d="M15 15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zM9 4.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zM11 10h-1v1a1 1 0 0 1-2 0v-1H7a1 1 0 0 1 0-2h1V7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z" />
                        </svg>
                        Add Photo
                      </a>
                      <a className="ybtn ybtn--small">
                        <svg
                          id="icons"
                          fill="#666"
                          height="18px"
                          viewBox="0 0 18 18"
                          width="18px"
                        >
                          <path d="M17.714 6.43L13 10.356v-3.03c-1 0-5.097 1.47-6.286 3.62.274-3.08 4.286-5.5 6.286-5.5V2.5l4.714 3.93zM3 4v10h11v-2.5l1-1V15H2V3h8.5l-1 1H3z" />
                        </svg>
                        Share
                      </a>
                      <a className="ybtn ybtn--small">
                        <svg
                          id="icons"
                          fill="#666"
                          height="18px"
                          viewBox="0 0 18 18"
                          width="18px"
                        >
                          <path d="M14 2H4v14l5-4 5 4V2zm-3.13 7.957L8.978 8.794 7.148 10 7.5 7.926 6 6.458l2.074-.303L8.977 4l.948 2.155L12 6.458l-1.5 1.468.37 2.03z" />
                        </svg>
                        Bookmark
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="biz-page-subheader">
                <div className="mapbox-container">
                  <div className="mapbox">
                    <div className="mapbox-map">
                      {this.props.details.details && (
                        <MapContainer
                          {...this.props.details.details.coordinates}
                        />
                      )}
                    </div>
                    <div className="mapbox-text">
                      <ul>
                        <li className="u-relative">
                          <span className="u-sticky-top u-absolute">
                            <svg
                              id="icons"
                              height="18px"
                              viewBox="0 0 18 18"
                              width="18px"
                            >
                              <path d="M14 7A5 5 0 0 0 4 7c0 1.97 1.15 3.658 2.806 4.472h-.17L9 16l2.363-4.528h-.17C12.85 10.658 14 8.97 14 7zM9 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                            </svg>
                          </span>
                          <div className="map-box-address u-space-14">
                            <address>
                              {this.props.details.details &&
                                this.props.details.details.location
                                  .display_address[0]}{" "}
                              <br />
                              {this.props.details.details &&
                                this.props.details.details.location
                                  .display_address[1]}
                            </address>
                          </div>
                        </li>
                        <li className="clearfix">
                          <span>
                            <svg
                              id="icons"
                              height="18px"
                              viewBox="0 0 18 18"
                              width="18px"
                            >
                              <path d="M16.444 7.556l-5.957-5.958a2.145 2.145 0 0 0-3.034 0L1.598 7.453a2.145 2.145 0 0 0 0 3.034l5.958 5.957a2 2 0 0 0 2.828 0l6.06-6.06a2 2 0 0 0 0-2.828zM9.97 11.47v-2.5h-3v3h-1v-4h4v-2.5l3 3-3 3z" />
                            </svg>
                          </span>{" "}
                          Get Directions
                        </li>
                        <li>
                          <span>
                            <svg
                              id="icons"
                              height="18px"
                              viewBox="0 0 18 18"
                              width="18px"
                            >
                              <path d="M15.862 12.526l-2.91-1.68a.442.442 0 0 0-.486.087l-1.58 1.687a.857.857 0 0 1-.52.232s-1.083.03-3.13-1.985c-2.046-2.015-2.054-3.12-2.054-3.12 0-.17.094-.41.21-.533L6.85 5.656a.49.49 0 0 0 .08-.504L5.295 2.14c-.073-.155-.228-.18-.345-.058L2.26 4.924a1.07 1.07 0 0 0-.248.53s-.34 2.927 3.75 6.955c4.093 4.025 6.96 3.59 6.96 3.59.167-.027.4-.148.516-.27l2.684-2.845c.117-.123.09-.285-.062-.36z" />
                            </svg>
                          </span>{" "}
                          {this.props.details.details &&
                            phoneFormatter(this.props.details.details.phone)}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="showcase-container">
                  <div className="showcase-container_inner">
                    <div className="showcase-photos">
                      <div className="photo photo-1">
                        <div className="showcase-photo-box">
                          <img
                            id="sized"
                            src={
                              this.props.details.details &&
                              this.props.details.details.photos[0]
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="photo photo-2">
                        <div className="showcase-photo-box">
                          <img
                            id="sized"
                            src={
                              this.props.details.details &&
                              this.props.details.details.photos[1]
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="photo photo-3">
                        <div className="showcase-photo-box">
                          <img
                            id="sized"
                            src={
                              this.props.details.details &&
                              this.props.details.details.photos[2]
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BusinessReview {...this.props.details} />
          </React.Fragment>
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ eventReducer }) => {
  console.log(eventReducer);
  return {
    details: eventReducer.details,
    loading: eventReducer.loading
  };
};

export default connect(mapStateToProps, { getDetails })(businessDetails);
