import React from 'react';
import { connect } from 'react-redux';
import './businessReview.css';
import burst from '../footer/images/burst_desktop_xsmall_outline.png';

const BusinessReview = props => (
  <div id="super-container" className="content-container">
    <div className="container">
      <div className="layout-block layout-a ysection position-with-scroll-container layout--biz-details">
        <div className="column column-alpha main-section">
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
                          <img src={burst} id="burst"/>
                          <b> Your trust is our top concern,</b> so businesses
                          can't pay to alter or remove their reviews.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-list">
                  <ul className="ylist ylist-bordered reviews">
                    <li>
                      <div className="review review--with-sidebar">
                        <div className="review-sidebar">
                          <div className="review-sidebar-content">
                            <div className="ypassport media-block">
                              <div className="media-avatar response-photo-box">
                                <div className="photo-box pb-60s">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column column-beta main-section">l;akjsdf;lkkasjs</div>
    </div>
  </div>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(BusinessReview);
