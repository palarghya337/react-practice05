import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './style.css';
import PropsExample from './props/PropsExample';
import StateExample from './state/StateExample';
import ReactDOM from 'react-dom';

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
          <div className="reactIndex mouseHover">
            <Link to="/eventHandling">Event Handling</Link>
          </div>
          <div id="examples">
            <Switch>
              <Route path="/propsExample">
                <PropsExample />
              </Route>
              <Route path="/stateExample">
                <StateExample />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default HomePage;
