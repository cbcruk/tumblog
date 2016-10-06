import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="category/(:filter)">
        <Route path=":id" />
      </Route>
    </Route>
  </Router>
);

export default Root;
