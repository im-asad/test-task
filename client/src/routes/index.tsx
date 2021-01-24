import React from 'react';
import { Route, Switch } from 'react-router-dom';

import List from '../pages/List';

interface Props {};

interface State {};

class Routes extends React.Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={List}
        />
      </Switch>
    );
  }
}

export default Routes;