import React, { Component } from "react";
import { connect } from "react-redux";

class BestBusinesses extends Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <h1>Find the Best Businesses in Town</h1>
        )
    }
}

const mapStateToProps = ({ eventReducer }) => ({
    eventReducer
  });
  
  export default connect(mapStateToProps)(BestBusinesses);
  