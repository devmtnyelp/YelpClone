
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Link, withRouter } from 'react-router-dom';
import './mapOfAllBiz.css';
import one from './markers/1.png';
import two from './markers/2.png';
import three from './markers/3.png';
import four from './markers/4.png';
import five from './markers/5.png';
import six from './markers/6.png';
import seven from './markers/7.png';
import eight from './markers/8.png';
import nine from './markers/9.png';
import ten from './markers/10.png';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.markerIcon = this.markerIcon.bind(this);
  }
  onMarkerClick(bizId) {
    this.props.history.push(`/businessdetails/${bizId}`);
  }
  
  markerIcon(i) {
    if (i === 0) {
      return one;
    } else if (i === 1) {
      return two;
    } else if (i === 2) {
      return three;
    } else if (i === 3) {
      return four;
    } else if (i === 4) {
      return five;
    } else if (i === 5) {
      return six;
    } else if (i === 6) {
      return seven;
    } else if (i === 7) {
      return eight;
    } else if (i === 8) {
      return nine;
    } else if (i === 9) {
      return ten;
    }
  }

  markers(results) {
    let arr = [];
    var latHolder = 0;
    var longHolder = 0;
    for (let i = 0; i < results.length; i++) {

      latHolder = results[i].coordinates.latitude;
      longHolder = results[i].coordinates.longitude;

      arr.push(
        <Marker
          onClick={() => this.onMarkerClick(this.props.results[i].id)}
          key={i}
          position={{
            lat: latHolder,
            lng: longHolder
          }}
          icon={this.markerIcon(i)}

        />
      );
    }
    return arr;
  }
  render() {
    let latitude1 = this.props.results[0].coordinates.latitude;
    let longitude1 = this.props.results[0].coordinates.longitude;
    return (
      <div className="businesses-map style">
        <Map
          google={this.props.google}
          style={{ width: '350px', height: '400px', position: 'relative' }}
          zoom={9}
          initialCenter={{
            lat: latitude1,
            lng: longitude1
          }}
        >
          {this.markers(this.props.results, this.props.bizname)}


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
    apiKey: 'AIzaSyDo7zOMR2WGwrQMCcThATLhXuaCBHp33l4'
  })(MapContainer)
);
