import React, { Component } from "react";
import { connect } from "react-redux";
// import businessSearch from "../../../server/controllers/businessSearch";
import { mainSearch } from "../../ducks/search/searchReducer";
import ResultCard from "./resultCard";
import SearchHeader from "../headers/searchHeader";
import map from "./map.png";

import "./searchResults.css"
import Footer from '../footer/footer'

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
    let search = this.props.location.search.replace("%20", " ").split("&");
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
          <h2>
            The Best {this.state.search} In {this.state.location}
          </h2>
        <div className="card-map">
          <div className="card-div">
            {this.props.searchResults.length > 0 &&
              this.props.searchResults.map((item, i) => (
                <div key={i}>
                  {console.log(i)}
                  <ResultCard obj={item} />
                </div>
              ))}
          </div> 
          <div className="display-map">
            <img className="map-pic" alt=" " src={map} />
          </div>
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
