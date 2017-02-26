import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';

const Root = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="search/(:search)" />
      <Route path="page/(:page)" />
    </Route>
  </Router>
);

export default Root;
