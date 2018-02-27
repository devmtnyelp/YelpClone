import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import yelppin from './markers/yelpmarker.png';
require("dotenv").config();

const { googleMapsKey } = process.env;

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: '288px', height: '135px', position: 'relative' }}
        zoom={14}
        initialCenter={{
          lat: this.props.latitude,
          lng: this.props.longitude
        }}
      >
        <Marker
          name={this.props.bizname}
          position={{
            lat: this.props.latitude,
            lng: this.props.longitude
          }}
          icon={yelppin}
        />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.props.bizname}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsKey
})(MapContainer);
