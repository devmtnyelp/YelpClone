import React, { Component } from 'react';
import './businessDetails.css';
import { connect } from 'react-redux';
import SearchHeader from '../headers/searchHeader';
import Footer from '../footer/footer';
import BusinessReview from './businessReview';
import { getDetails } from '../../ducks/events/reducer';
<<<<<<< Updated upstream
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Map from './mapContainer';
=======
>>>>>>> Stashed changes

class businessDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const restaurantId = 'gary-danko-san-francisco';
    this.props.getDetails(restaurantId);
  }

  render() {
    return (
      <div>
        <SearchHeader />
        <div className="content-container">
          <div className="biz-page-header clearfix">
            <div className="biz-page-header-left">
              <div className="u-space-t1">
                <h1 className="biz-page-title embossed-text-white shortenough">
                  {this.props.details.details &&
                    this.props.details.details.name}
                </h1>
              </div>
            </div>
            <div className="biz-page-header-right u-relative">
              <div className="biz-page-actions nowrap">
<<<<<<< Updated upstream
                <a className="ybtn ybtn--primary war-button">Write a Review</a>
=======
                <a className="ybtn war-button">Write a Review</a>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                  <Map
                    className="map"
                    place={
                      this.props.details.details &&
                      this.props.details.details.name
                    }
                    google={this.props.google}
                    style={{
                      width: '290px',
                      height: '140px',
                      position: 'relative'
                    }}
                    initialCenter={{
                      lat: 40.854885,
                      lng: -88.081807
                    }}
                    zoom={15}
                    onClick={this.onMapClicked}
                  />
=======
                  <img src="http://via.placeholder.com/290x140" alt="" />
>>>>>>> Stashed changes
                </div>
                <div className="mapbox-text">
                  <ul>
                    <li className="u-relative">
                      <address>
                        {this.props.details.details &&
                          this.props.details.details.location
                            .display_address[0]}{' '}
                        <br />
                        {this.props.details.details &&
                          this.props.details.details.location
                            .display_address[1]}
                      </address>
                    </li>
                    <li className="clearfix">Get Directions</li>
                    <li>
                      {this.props.details.details &&
                        this.props.details.details.phone}
                    </li>
                    <li>hopdoddy.com</li>
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
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ eventReducer }) => ({
  details: eventReducer.details
});

export default connect(mapStateToProps, { getDetails })(businessDetails);
