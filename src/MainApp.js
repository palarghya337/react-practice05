import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './style.css';
import PropsExample from './props/PropsExample';
import StateExample from './state/StateExample';

function MainApp() {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <table>
          <tr>
            <td className="reactIndex">
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
            </td>
            <td className="examples">
              <h3>Welcome to React practice tutorial</h3>
              Please click the links to see the examples.
              <Switch>
                <Route path="/propsExample">
                  <PropsExample />
                </Route>
                <Route path="/stateExample">
                  <StateExample />
                </Route>
              </Switch>
            </td>
          </tr>
        </table>
      </Router>
    </div>
  );
}
export default MainApp;
