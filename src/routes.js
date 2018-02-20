import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Home from "../src/components/home/home";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import SearchHeader from "./components/headers/searchHeader";
import LoginHeader from "./components/headers/loginHeader";
import SearchResults from "./components/searchResults/searchResults.js";
import resultCard from "./components/searchResults/resultCard";
import businessDetails from "./components/businessDetails/businessDetails";
import Star from "./components/businessDetails/star";
import CreateReview from "./components/createReview/createReview";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/searchheader" component={SearchHeader} />
    <Route path="/loginheader" component={LoginHeader} />
    <Route path="/searchresults" component={SearchResults} />
    <Route path="/businessdetails/:restaurantId" component={businessDetails} />
    <Route path="/star" component={Star} />
    <Route path="/createreview" component={CreateReview} />
  </Switch>
);

export default withRouter(Routes);
