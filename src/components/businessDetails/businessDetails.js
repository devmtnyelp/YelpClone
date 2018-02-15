import React, { Component } from 'react';
import './businessDetails.css';
import { connect } from 'react-redux';
import SearchHeader from '../headers/searchHeader';
import Footer from '../footer/footer';
import BusinessReview from './businessReview';

class businessDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <SearchHeader />
        <div className="content-container">
          <div className="biz-page-header clearfix">
            <div className="biz-page-header-left">
              <div className="u-space-t1">
                <h1 class="biz-page-title embossed-text-white shortenough">
                  Hoppydoddy Burger Bar
                </h1>
              </div>
            </div>
            <div className="biz-page-header-right u-relative">
              <div className="biz-page-actions nowrap">
                <a className="ybtn war-button">Write a Review</a>
                <span className="ybtn-group clearfix">
                  <a className="ybtn ybtn--small">Add Photo</a>
                  <a className="ybtn ybtn--small">Share</a>
                  <a className="ybtn ybtn--small">Bookmark</a>
                </span>
              </div>
            </div>
          </div>
          <div className="biz-page-subheader">
            <div className="mapbox-container">
              <div className="mapbox">
                <div className="mapbox-map">
                  <img src="http://via.placeholder.com/290x140" />
                </div>
                <div className="mapbox-text">
                  <ul>
                    <li className="u-relative">
                      <address>
                        3227 McKinney Ave <br />Dallas, TX 75204
                      </address>
                    </li>
                    <li className="clearfix">Get Directions</li>
                    <li>(214) 871-2337</li>
                    <li>hopdoddy.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="showcase-container">
              <div className="showcase-container_inner">
                <div className="top-shelf-grey" />
                <div className="showcase-photos">
                  <div className="photo photo-1">
                    <div className="showcase-photo-box">
                      <img src="http://lorempixel.com/220/220/food/" />
                    </div>
                  </div>
                  <div className="photo photo-2">
                    <div className="showcase-photo-box">
                      <img src="http://lorempixel.com/220/220/food/" />
                    </div>
                  </div>
                  <div className="photo photo-3">
                    <div className="showcase-photo-box">
                      <img src="http://lorempixel.com/220/220/food/" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BusinessReview />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(businessDetails);
