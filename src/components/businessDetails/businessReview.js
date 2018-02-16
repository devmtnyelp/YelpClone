import React from 'react';
import { connect } from 'react-redux';
import './businessReview.css';
import burst from '../footer/images/burst_desktop_xsmall_outline.png';

const BusinessReview = props => (
  <div id="super-container" className="content-container">
    <div className="container">
      <div className="layout-block layout-a ysection position-with-scroll-container layout--biz-details">
        <div className="column column-alpha main-section">
          <div>
            <div className="feed">
              <div className="feed_header">
                <div className="section-header section-header--no-spacing">
                  <h2>
                    Recommended Reviews <b>for Hopdoddy Burger Bar</b>
                  </h2>
                  <div className="u-space-b1">
                    <div className="feed_trust-banner">
                      <div className="arrange arrange--12 arrange--middle">
                        <div className="arrange_unit arrange_unit--fill">
                          <span className="legal-copy">
                            <img src={burst} id="burst" />
                            <b> Your trust is our top concern,</b> so businesses
                            can't pay to alter or remove their reviews.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review-list">
                    <ul id="ylist" className="ylist ylist-bordered reviews">
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
                                        Arnold S
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
                                    <div className="i-stars i-stars--regular-5">
                                      stars
                                    </div>
                                  </div>
                                  <span className="rating-qualifier">
                                    Review Date
                                  </span>
                                </div>
                                <p id="review-par">
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                </p>
                              </div>
                              <div className="review-footer clearfix" />
                            </div>
                          </div>
                        </div>
                      </li>
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
                                        Arnold S
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
                                    <div className="i-stars i-stars--regular-5">
                                      stars
                                    </div>
                                  </div>
                                  <span className="rating-qualifier">
                                    Review Date
                                  </span>
                                </div>
                                <p id="review-par">
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                </p>
                              </div>
                              <div className="review-footer clearfix" />
                            </div>
                          </div>
                        </div>
                      </li>
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
                                        Arnold S
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
                                    <div className="i-stars i-stars--regular-5">
                                      stars
                                    </div>
                                  </div>
                                  <span className="rating-qualifier">
                                    Review Date
                                  </span>
                                </div>
                                <p id="review-par">
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                  Review Review Review Review Review Review
                                </p>
                              </div>
                              <div className="review-footer clearfix" />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    Insert Suggestions Component Here
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

const mapStateToProps = state => state;

export default connect(mapStateToProps)(BusinessReview);
