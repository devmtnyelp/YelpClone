import React, { Component } from "react";
import { connect } from "react-redux";
// import businessSearch from "../../../server/controllers/businessSearch";
import { mainSearch } from "../../ducks/search/searchReducer";
import ResultCard from "./resultCard";
import SearchHeader from "../headers/searchHeader";
import Footer from "../footer/footer";
import MapContainer from "../businessDetails/mapOfAllBiz";

class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      results: {},
      search: []
    };
  }

  componentDidMount() {
    let search = this.props.location.search.split("&");
    this.props.mainSearch(search[0].substr(10), search[1].substr(8));
  }

  componentWillReceiveProps(nextProps) {
    let search = this.props.location.search.split("&");
    this.setState({
      location:
        search[0]
          .substr(10)
          .charAt(0)
          .toUpperCase() + search[0].substr(11),
      search:
        search[1]
          .substr(8)
          .charAt(0)
          .toUpperCase() + search[1].substr(9)
    });
  }

  render() {
    const { searchResults } = this.props;
    console.log("coordinates: ", this.props.coordinates);
    return (
      <div>
        <SearchHeader />
        <div className="results-title">
          The Best {this.state.search} In {this.state.location}
        </div>
        <div />
        {this.props.coordinates &&
          this.props.coordinates[0] && (
            <MapContainer results={this.props.coordinates} />
          )}

        <div>
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
