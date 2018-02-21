import React, { Component } from "react";
import { connect } from "react-redux";
import {Link, withRouter} from "react-router-dom";

import "./newBusinesses.css";
import BizRating from "./biz1.png";
import Biz2Rating from "./biz2.png";
import Fire from "./fire.png";

class NewBusinesses extends Component {
   

    render(){
        return(
            <div>
                <div className="new-container">
                    <h2 className="h2-business">Yelp Dallas</h2>
                    <div className="Links">
                        <Link to="/searchresults/?location=San%20Francisco&?search=businesses"
                              className="destination-link"
                        >
                            San Francicso
                        </Link>
                        <Link to="/searchresults/?location=Los%20Angeles&?search=businesses"
                              className="destination-link"
                        >
                            Los Angeles
                        </Link>
                        <Link to="/searchresults/?location=New%20York&?search=businesses"
                              className="destination-link"
                        >
                            New York
                        </Link>
                        <Link to="/searchresults/?location=San%20Jose&?search=businesses"
                              className="destination-link"
                        >
                            San Jose
                        </Link>
                        <Link to="/searchresults/?location=Chicago&?search=businesses"
                              className="destination-link"
                        >
                            Chicago
                        </Link>
                        <Link to="/searchresults/?location=Palo%20Alto&?search=businesses"
                              className="destination-link"
                        >
                            Palo Alto
                        </Link>
                    </div>

                    <h2>Hot & New Businesses</h2>

                    <div className="new-businesses">
                        <Link to="/businessdetails/tapas-castile-dallas">
                            <div className="biz-container">
                                <img 
                                    className="new-img"
                                    src="https://s3-media2.fl.yelpcdn.com/bphoto/vHxP-hbpiq9HXXoOhgqj0w/l.jpg" 
                                    alt=""
                                />
                                <div className="new-biz-info">
                                    <div className="biz-title">Tapas Castile</div>
                                    <img className="stars-placeholder" src={BizRating} alt="" />
                                    <div className="biz-type">$$ - Tapas Bars, Spanish</div>
                                    <div className="biz-location">Trinity Groves</div>
                                    <div className="fire-flex">
                                        <img className="fire" src={Fire} alt="" /> 
                                        <span className="fire-biz">Opened 3 Weeks Ago!</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/businessdetails/dallas-grilled-cheese-co-dallas-3">
                            <div className="biz-container">
                                <img 
                                    className="new-img"
                                    src="https://s3-media1.fl.yelpcdn.com/bphoto/fQaN6P-7nZfvDSU8bjpqDg/l.jpg" 
                                    alt=""
                                />
                                <div className="new-biz-info">
                                    <div className="biz-title">Dallas Grilled Cheese Co</div>
                                    <img className="stars2-placeholder" src={Biz2Rating} alt="" />
                                    <div className="biz-type">$$ - American (Traditional)</div>
                                    <div className="biz-location">Upper Greenville</div>
                                    <div className="fire-flex">
                                        <img className="fire" src={Fire} alt="" /> 
                                        <span className="fire-biz">Opened 6 Weeks Ago!</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/businessdetails/musume-dallas-2">
                            <div className="biz-container">
                                <img 
                                    className="new-img"
                                    src="https://s3-media3.fl.yelpcdn.com/bphoto/BNJI9XTwhlgzVTKs1kstGg/l.jpg" 
                                    alt=""
                                />
                                <div className="new-biz-info">
                                    <div className="biz-title">Musume</div>
                                    <img className="stars-placeholder" src={BizRating} alt="" />
                                    <div className="biz-type">Sushi Bars, Cocktail Bars, Asian Fusion</div>
                                    <div className="biz-location">Arts District, Downtown</div>
                                    <div className="fire-flex">
                                        <img className="fire" src={Fire} alt="" /> 
                                        <span className="fire-biz">Opened 3 Weeks Ago!</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        </div>
                        <Link to="/searchresults/?location=dallas&?search=new%20Businesses">
                            <div className="hot-new">See more Hot and New Businesses</div>
                        </Link>
                </div>
            </div>
        )
    }
}

    const mapStateToProps = ({ eventReducer }) => ({
        eventReducer
      });
      
      export default withRouter(connect(mapStateToProps)(NewBusinesses));