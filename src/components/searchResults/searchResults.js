import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import businessSearch from "../../../server/controllers/businessSearch";
import { mainSearch } from '../../ducks/search/searchReducer';
import ResultCard from './resultCard';
import SearchHeader from '../headers/searchHeader';
import MapContainer from '../businessDetails/mapOfAllBiz';
import Footer from '../footer/footer';
import loadinggif from '../../components/businessDetails/loading.gif';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {},
      search: [],
      location: props.location.search
        .split('&')[0]
        .substr(10)
        .replace('%20', ' '),
      terms: props.location.search.split('&')[1].substr(8)
    };
  }

  componentDidMount() {
    this.props.mainSearch(this.state.location, this.state.terms);

    //console.log(this.props)
    //let search = this.props.location.search.split("&");
    //this.props.mainSearch(search[0].substr(10), search[1].substr(8));
  }

  componentWillReceiveProps(nextProps) {
    let search = this.props.location.search.split('&');
    this.setState({
      location:
        search[0]
          .substr(10)
          .charAt(0)
          .toUpperCase() + search[0].substr(11).replace('%20', ' '),
      search:
        search[1]
          .substr(8)
          .charAt(0)
          .toUpperCase() + search[1].substr(9)
    });
  }

  render() {
    return (
      <div>
        <SearchHeader />
        <div className="results-title">
          <h1>
            The Best {this.state.search} in {this.state.location}
          </h1>
        </div>
        {this.props.loading && (
          <img src={loadinggif} style={{ width: '100%' }} alt="" />
        )}

        {this.props.searchResults &&
          this.props.searchResults && (
            <MapContainer
              results={this.props.searchResults}
              bizname={this.props.searchResults}
            />
          )}

        <div id="results">
          {this.props.searchResults &&
            this.props.searchResults.map((item, i) => (
              <div key={i}>
                <ResultCard obj={item} number={i} />
              </div>
            ))}
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps({ searchReducer, eventReducer }) {
  return {
    searchResults: searchReducer.searchResults,
    loading: searchReducer.isLoading,
    geoLocale: eventReducer.geoLocale
  };
}

export default connect(mapStateToProps, { mainSearch })(SearchResults);

// chain a refresh command so that the map updates and shows correct location.
