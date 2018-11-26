import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import UserPage from './routes/users/UserPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={UserPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
