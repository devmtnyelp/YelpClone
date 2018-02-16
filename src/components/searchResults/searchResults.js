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

  shouldComponentUpdate(prevState, newState) {
    return true;
  }

  componentWillMount() {}

  componentDidMount() {

    let search = this.props.location.search.split("&");
    this.props.mainSearch(search[0].substr(10), search[1].substr(8));
  }


  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
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

    const { SearchResults } = this.props;

    return (
      <div>
        <SearchHeader />
        <div className="results-title">
          The Best {this.state.search} In {this.state.location}
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
