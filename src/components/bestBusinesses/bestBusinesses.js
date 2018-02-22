import React, { Component } from "react";
import { connect } from "react-redux";
import {Link, withRouter} from 'react-router-dom';

import "./bestBusinesses.css";

class BestBusinesses extends Component {
    render(){
        return(
            <div className="business-body">
                <h2 className="h2-business">Find the Best Businesses in Town</h2>
                <div className="business-flex">
                    <Link to="/searchresults/?location=dallas&?search=hotels">
                        <div className="business">
                            <img 
                                className="business-img"
                                src="https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/5376b409ce7a/assets/img/categories/services_promotion/images/hotels@2x.png"
                                alt="" 
                            />
                            <p className="business-title">Hotels</p>
                        </div>
                    </Link>
                    <Link to="/searchresults/?location=dallas&?search=dry%20Cleaning">
                        <div className="business">
                            <img 
                                className="business-img"
                                src="https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/8f8486bb9e9a/assets/img/categories/services_promotion/images/dryclean.png" 
                                alt=""
                            />
                            <p className="business-title">Dry Cleaning</p>
                        </div>
                    </Link>
                    <Link to="/searchresults/?location=dallas&?search=movers">
                        <div className="business">
                            <img 
                                className="business-img"
                                src="https://s3-media4.fl.yelpcdn.com/assets/srv0/homepage/705be9748d04/assets/img/categories/services_promotion/images/movers.png" 
                                alt=""
                            />
                            <p className="business-title">Movers</p>
                        </div>
                    </Link>
                    <Link to="/searchresults/?location=dallas&?search=locksmith">
                        <div className="business">
                            <img 
                                className="business-img"
                                src="https://s3-media3.fl.yelpcdn.com/assets/srv0/homepage/269e308f3ee6/assets/img/categories/services_promotion/images/locksmiths.png" 
                                alt=""
                            />
                            <p className="business-title">Locksmith</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ eventReducer }) => ({
    eventReducer
  });
  
  export default withRouter(connect(mapStateToProps)(BestBusinesses));
  