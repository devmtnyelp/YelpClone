import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/home/home";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import userProfile from './components/userProfile/userProfile';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/userprofile" component={userProfile} />
  </Switch>
);

export default Routes;
