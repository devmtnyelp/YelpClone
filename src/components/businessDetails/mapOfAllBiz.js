import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const markers = function(results) {
  {
    let arr = [];
    var latholder = 0;
    var lonholder = 0;
    for (let i = 0; i < results.length; i++) {
      console.log("marker:");
      latholder = results[i].coords.latitude;
      lonholder = results[i].coords.longitude;
      arr.push(
        <Marker
          key={i}
          position={{
            lat: latholder,
            lng: lonholder
          }}
        />
      );
    }
    return arr;
  }
};

export class MapContainer extends Component {
  render() {
    console.log("this.props: ", this.props);
    var latitude1 = this.props.results[0].coords.latitude;
    var longitude1 = this.props.results[0].coords.longitude;
    return (
      <Map
        google={this.props.google}
        style={{ width: "224px", height: "135px", position: "relative" }}
        zoom={9}
        initialCenter={{
          lat: latitude1,
          lng: longitude1
        }}
      >
        {markers(this.props.results)}

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
  apiKey: "AIzaSyDo7zOMR2WGwrQMCcThATLhXuaCBHp33l4"
})(MapContainer);