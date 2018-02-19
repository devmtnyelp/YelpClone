import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: '224px', height: '135px', position: 'relative' }}
        zoom={14}
      >
        <Marker onClick={this.onMarkerClick} name={'Current location'} />

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