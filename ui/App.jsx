import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import IntermittentFailuresApp from './intermittent-failures/App';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/test">
              <div>hello!</div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default hot(App);
