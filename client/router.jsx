import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout.jsx';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Layout} />
  </Switch>
);

export default Router;
