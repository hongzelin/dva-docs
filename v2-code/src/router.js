import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import UserPage from './routes/users/UserPage';

function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={UserPage} />
        </Switch>
      </Router>
    </LocaleProvider>
  );
}

export default RouterConfig;
