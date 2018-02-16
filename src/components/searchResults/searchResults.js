import React, { Component } from "react";
import { connect } from "react-redux";
// import businessSearch from "../../../server/controllers/businessSearch";
import { mainSearch } from "../../ducks/search/searchReducer";
import ResultCard from "./resultCard";
import SearchHeader from "../headers/searchHeader";

class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      results: {},
      search: []
    };
  }

  componentDidMount() {
    this.state.search = this.props.location.search.split("&");

    this.props.mainSearch(
      this.state.search[0].substr(10),
      this.state.search[1].substr(8)
    );
  }

  render() {
    if (this.state.search[0]) {
      this.state.search[0] = this.state.search[0].replace("?location=", "");
    }
    if (this.state.search[1]) {
      this.state.search[1] = this.state.search[1].replace("?search=", "");
    }

    const { SearchResults } = this.props;
    console.log(this.props.searchResults);
    return (
      <div>
        <SearchHeader />
        <div>
          The Best {this.state.search[1]} In {this.state.search[0]}
        </div>
        <div />
        <div>
          {this.props.searchResults.length > 0 &&
            this.props.searchResults.map((item, i) => (
              <div key={i}>
                {console.log(i)}
                <ResultCard obj={item} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ searchReducer }) {
  return searchReducer;
}

export default connect(mapStateToProps, { mainSearch })(SearchResults);
