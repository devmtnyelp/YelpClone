import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./components/home/home";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import userProfile from './components/userProfile/userProfile';
import SearchHeader from "./components/headers/searchHeader";
import LoginHeader from "./components/headers/loginHeader";
import SearchResults from "./components/searchResults/searchResults.js";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/userprofile" component={userProfile} />
    <Route path ="/searchheader" component={SearchHeader} />
    <Route path ="/loginheader" component={LoginHeader} />
    <Route path="/searchresults" component={SearchResults} />
  </Switch>
);

export default Routes;

