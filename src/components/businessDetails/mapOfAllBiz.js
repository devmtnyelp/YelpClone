import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';
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

const markers = function(results, bizname) {
  {
    let arr = [];
    var latHolder = 0;
    var longHolder = 0;

    for (let i = 0; i < results.length; i++) {
      // console.log('props:', this.props);
      latHolder = results[i].coords.latitude;
      longHolder = results[i].coords.longitude;
      const placename = bizname[i].name;

      arr.push(
        <Marker
          key={i}
          position={{
            lat: latHolder,
            lng: longHolder
          }}
          name={placename}
          icon={one}
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

    return (
      <Link to={'/businessdetails/' + this.props.results.id}>
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
            {markers(this.props.results, this.props.bizname)}

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
  apiKey: 'AIzaSyDo7zOMR2WGwrQMCcThATLhXuaCBHp33l4'
})(MapContainer);
