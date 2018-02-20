import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Link } from "react-router-dom";

const markers = function(results) {
  {
    let arr = [];
    var latHolder = 0;
    var longHolder = 0;
    for (let i = 0; i < results.length; i++) {
      // console.log("marker:");
      latHolder = results[i].coords.latitude;
      longHolder = results[i].coords.longitude;
      arr.push(
        <Marker
          key={i}
          position={{
            lat: latHolder,
            lng: longHolder
          }}
        />
      );
    }
    return arr;
  }
};

export class MapContainer extends Component {
  render() {
    let latitude1 = this.props.results[0].coords.latitude;
    let longitude1 = this.props.results[0].coords.longitude;

    console.log("this.props.results MapOfAllBiz: ", this.props.results);
    return (
      <Link to={"/businessdetails/" + this.props.results.id}>
        <div
          className="businesses-map"
          style={{ marginLeft: 750, marginTop: 50 }}
        >
          <Map
            google={this.props.google}
            style={{ width: "244px", height: "165px", position: "relative" }}
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
        </div>
      </Link>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDo7zOMR2WGwrQMCcThATLhXuaCBHp33l4"
})(MapContainer);
