import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Link, withRouter } from "react-router-dom";

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(bizId) {
    this.props.history.push(`/businessdetails/${bizId}`);
  }

  markers(results) {
    let arr = [];
    var latHolder = 0;
    var longHolder = 0;

    for (let i = 0; i < results.length; i++) {
      latHolder = results[i].coords.latitude;
      longHolder = results[i].coords.longitude;
      arr.push(
        <Marker
          onClick={() => this.onMarkerClick(this.props.results[i].id)}
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

  render() {
    let latitude1 = this.props.results[0].coords.latitude;
    let longitude1 = this.props.results[0].coords.longitude;

    console.log("this.props.results MapOfAllBiz: ", this.props.results);
    return (
      <div
        className="businesses-map"
        style={{ marginLeft: 750, marginTop: 50 }}
      >
        <Map
          google={this.props.google}
          style={{ width: "404px", height: "315px", position: "relative" }}
          zoom={9}
          initialCenter={{
            lat: latitude1,
            lng: longitude1
          }}
        >
          {this.markers(this.props.results)}

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.props.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default withRouter(
  GoogleApiWrapper({
    apiKey: "AIzaSyDo7zOMR2WGwrQMCcThATLhXuaCBHp33l4"
  })(MapContainer)
);
