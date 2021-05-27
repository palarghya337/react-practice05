import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './style.css';
import PropsExample from './props/PropsExample';
import StateExample from './state/StateExample';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to React practice tutorial</h3>
        <div>Please click the below Links to enter.</div>

        <Router>
          <div className="reactIndex mouseHover">
            <Link to="/propsExample" level="PropsExample">
              Props Example
            </Link>
          </div>
          <div className="reactIndex mouseHover">
            <Link to="/stateExample" level="StateExample">
              State Example
            </Link>
          </div>
          <Switch>
            <Route path="/propsExample">
              <div className="border">
                <PropsExample />
              </div>
            </Route>
            <Route path="/stateExample">
              <div className="border">
                <StateExample />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default HomePage;
