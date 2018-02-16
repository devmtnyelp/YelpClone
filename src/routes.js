import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Home from "../src/components/home/home";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import SearchHeader from "./components/headers/searchHeader";
import LoginHeader from "./components/headers/loginHeader";
import SearchResults from "./components/searchResults/searchResults.js";
// import displayCard from "./components/searchResults/displayCard";
import businessDetails from "./components/businessDetails/businessDetails";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/searchheader" component={SearchHeader} />
    <Route path="/loginheader" component={LoginHeader} />
    <Route path="/searchresults" component={SearchResults} />
    <Route path="/businessdetails" component={businessDetails} />
  </Switch>
);

export default withRouter(Routes);
