import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './components/home/home';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
