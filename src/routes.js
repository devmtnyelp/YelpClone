import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from "../src/components/home/home";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import SearchHeader from "./components/headers/searchHeader";
import LoginHeader from "./components/headers/loginHeader";
import SearchResults from "./components/searchResults/searchResults.js";
<<<<<<< HEAD
import displayCard from "./components/searchResults/displayCard";
=======
// import displayCard from "./components/searchResults/displayCard";
>>>>>>> 1db0a848369fd8d5887fd1bf243d894a2c571b81
import businessDetails from "./components/businessDetails/businessDetails";


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path ="/searchheader" component={SearchHeader} />
    <Route path ="/loginheader" component={LoginHeader} />
    <Route path="/searchresults" component={SearchResults} />
<<<<<<< HEAD
    <Route path ="/card" component={displayCard} />
=======
>>>>>>> 1db0a848369fd8d5887fd1bf243d894a2c571b81
    <Route path ="/businessdetails" component={businessDetails} />
  </Switch>
);

export default Routes;

