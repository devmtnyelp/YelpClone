import React, { Component } from "react";
import { connect } from "react-redux";
import "./businessReview.css";
import burst from "../footer/images/burst_desktop_xsmall_outline.png";
import { getReviews } from "../../ducks/events/reducer";
import Star from "./star";

class BusinessReview extends Component {

  componentWillMount() {
    if (this.props.details) {
      let restaurantId = this.props.details.id;
      this.props.getReviews(restaurantId);
    }
  }

  render() {
    function dateParser(str) {
      let formatted = str.split(" ")[0].split("-");
      return formatted[1] + "/" + formatted[2] + "/" + formatted[0];
    }
    return (
      <div>
        <div id="super-container" className="content-container">
          <div className="container">
            <div className="layout-block layout-a ysection position-with-scroll-container layout--biz-details">
              <div className="column column-alpha main-section">
                <div>
                  <div className="feed">
                    <div className="feed_header">
                      <div className="section-header section-header--no-spacing">
                        <h2>
                          Recommended Reviews{" "}
                          <b>
                            for {this.props.details && this.props.details.name}
                          </b>
                        </h2>
                        <div className="u-space-b1">
                          <div className="feed_trust-banner">
                            <div className="arrange arrange--12 arrange--middle">
                              <div id="centered" className="arrange_unit arrange_unit--fill">
                                <span className="legal-copy">
                                  <img src={burst} id="burst" alt="" />
                                  <b> Your trust is our top concern,</b> so
                                  businesses can't pay to alter or remove their
                                  reviews.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {this.props.reviews &&
                          this.props.reviews.map((rev, i) => {
                            return (
                              <div key={i} className="review-list">
                                <ul
                                  id="ylist"
                                  className="ylist ylist-bordered reviews"
                                >
                                  <li>
                                    <div className="review review--with-sidebar">
                                      <div className="review-sidebar">
                                        <div className="review-sidebar-content">
                                          <div className="ypassport media-block">
                                            <div className="media-avatar response-photo-box">
                                              <div className="photo-box pb-60s">
                                                <img
                                                  id="settledown"
                                                  src={rev.user.image_url}
                                                  alt=""
                                                />
                                              </div>
                                            </div>
                                            <div className="media-story">
                                              <ul
                                                id="info-align"
                                                className="user-passport-info"
                                              >
                                                <li className="user-name">
                                                  <p
                                                    id="info-align"
                                                    className="ypassport user-display-name"
                                                  >
                                                    {rev.user.name}
                                                  </p>
                                                </li>
                                                <li className="user-location">
                                                  Dallas, TX
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="review-wrapper">
                                          <div className="review-content">
                                            <div className="biz-rating-large rating-large">
                                              <div className="rating-top">
                                                <div className="right-review-item">
                                                  <ul
                                                    id="row"
                                                    className="res_stars"
                                                  >
                                                    <Star rev={rev.rating} />
                                                  </ul>
                                                </div>
                                              </div>
                                              <span className="rating-qualifier">
                                                {dateParser(rev.time_created)}
                                              </span>
                                            </div>
                                            <p id="review-par">{rev.text}</p>
                                          </div>
                                          <div className="review-footer clearfix" />
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            );
                          })}
                        <div>Insert Suggestions Component Here</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ eventReducer }) => ({
  eventReducer
});

export default connect(mapStateToProps, { getReviews })(BusinessReview);
