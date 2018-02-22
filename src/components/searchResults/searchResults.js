import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { connect } from "react-redux";
// import businessSearch from "../../../server/controllers/businessSearch";
import { mainSearch } from "../../ducks/search/searchReducer";
import ResultCard from "./resultCard";
import SearchHeader from "../headers/searchHeader";
import MapContainer from "../businessDetails/mapOfAllBiz";
import Footer from "../footer/footer";
import "./searchResults.css"

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {},
      search: [],
      location: props.location.search
        .split("&")[0]
        .substr(10)
        .replace("%20", " "),
      terms: props.location.search
        .split("&")[1]
        .substr(8)
        .replace("%20", " ")
    };
  }

  componentDidMount() {
    this.props.mainSearch(this.state.location, this.state.terms);
  }

  componentWillReceiveProps(nextProps) {
    let search = this.props.location.search.split("&");
    this.setState({
      location:
        search[0]
          .substr(10)
          .charAt(0)
          .toUpperCase() + search[0].substr(11).replace("%20", " "),
      search:
        search[1]
          .substr(8)
          .charAt(0)
          .toUpperCase() + search[1].substr(9).replace("%20", " ")
    });
  }

  render() {
    console.log("resultsProps:", this.props);
    return (
      <div className="tester">
        <SearchHeader />
          <div className="h1-results-title">
            The <span className="bold">Best {this.state.search} </span> in {this.state.location}
          </div>
      <div className="map-responsive">
        {this.props.coordinates &&
          this.props.coordinates[0] && (
            <MapContainer
              results={this.props.coordinates}
              bizname={this.props.searchResults}
            />
          )}
      </div>

        <div id="results">
          {this.props.searchResults &&
            this.props.searchResults.map((item, i) => (
              <div key={i}>
                <ResultCard obj={item} />
              </div>
            ))}
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ searchReducer }) {
  return searchReducer;
}

export default connect(mapStateToProps, { mainSearch })(SearchResults);

// chain a refresh command so that the map updates and shows correct location.
