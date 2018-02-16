import React, { Component } from 'react';
import { connect } from 'react-redux';
import './businessReview.css';
import burst from '../footer/images/burst_desktop_xsmall_outline.png';
import { getReviews } from '../../ducks/events/reducer';
import Star from './star';

class BusinessReview extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.details) {
      let restaurantId = this.props.details.id;
      this.props.getReviews(restaurantId);
    }
  }

  render() {
    const stars = [1, 2, 3, 4, 5].map(idx => (
      <Star
        rating={this.props.details && this.props.details.rating}
        index={idx}
        key={idx}
        name="smallest-star"
      />
    ));
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
                          Recommended Reviews{' '}
                          <b>
                            for {this.props.details && this.props.details.name}
                          </b>
                        </h2>
                        <div className="u-space-b1">
                          <div className="feed_trust-banner">
                            <div className="arrange arrange--12 arrange--middle">
                              <div className="arrange_unit arrange_unit--fill">
                                <span className="legal-copy">
                                  <img src={burst} id="burst" />
                                  <b> Your trust is our top concern,</b> so
                                  businesses can't pay to alter or remove their
                                  reviews.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {this.props.reviews &&
                          this.props.reviews.reviews.map((rev, i) => {
                            return (
                              <div className="review-list">
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
                                                <img src="http://via.placeholder.com/60x60" />
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
                                                    class="res_stars"
                                                  >
                                                    {stars}
                                                  </ul>
                                                </div>
                                              </div>
                                              <span className="rating-qualifier">
                                                {rev.time_created}
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
                                Insert Suggestions Component Here
                              </div>
                            );
                          })}
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
