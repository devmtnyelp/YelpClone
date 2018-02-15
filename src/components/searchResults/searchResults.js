import React, { Component } from "react";
import { connect } from "react-redux";
// import businessSearch from "../../../server/controllers/businessSearch";
import { mainSearch } from "../../ducks/search/searchReducer";
import ResultCard from "./resultCard";

class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      results: {}
    };
  }

  componentDidMount() {
    let search = this.props.location.search.split("&");
    this.props.mainSearch(search[0].substr(10), search[1].substr(8));
  }

  render() {
    const { SearchResults } = this.props;
    console.log(this.props.searchResults);
    return (
      <div>
        {this.props.searchResults.length > 0 &&
          this.props.searchResults.map((item, i) => (
            <div key={i}>
              {console.log(i)}
              <ResultCard obj={item} />
            </div>
          ))}
      </div>
    );
  }
}

function mapStateToProps({ searchReducer }) {
  return searchReducer;
}

export default connect(mapStateToProps, { mainSearch })(SearchResults);
