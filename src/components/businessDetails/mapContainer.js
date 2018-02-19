import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: '286px', height: '135px', position: 'relative' }}
        zoom={14}
        initialCenter={{
          lat: this.props.latitude,
          lng: this.props.longitude
        }}
      >
        <Marker
          position={{
            lat: this.props.latitude,
            lng: this.props.longitude
          }}
        />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.props.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDo7zOMR2WGwrQMCcThATLhXuaCBHp33l4'
})(MapContainer);
