import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './style.css';
import PropsExample from './props/PropsExample';
import StateExample from './state/StateExample';
import EventHandlingExamples from './eventhandling/EventHandlingExamples';

function MainApp() {
  function hideHomeMessage() {
    var message = document.getElementById('welcomeMessage');
    message.style.display = 'none';
  }

  function showHomeMessage() {
    var message = document.getElementById('welcomeMessage');
    message.style.display = 'block';
  }

  return (
    <div>
      <Router>
        <Link to="/" onClick={showHomeMessage}>
          Home
        </Link>
        <table>
          <tr>
            <td className="reactIndex">
              <div className="reactIndex mouseHover">
                <Link
                  to="/propsExample"
                  level="PropsExample"
                  onClick={hideHomeMessage}
                >
                  Props Example
                </Link>
              </div>
              <div className="reactIndex mouseHover">
                <Link
                  to="/stateExample"
                  level="StateExample"
                  onClick={hideHomeMessage}
                >
                  State Example
                </Link>
              </div>
              <div className="reactIndex mouseHover">
                <Link to="/eventHandlingExamples" onClick={hideHomeMessage}>
                  Event Handling
                </Link>
              </div>
            </td>
            <td className="examples">
              <div id="welcomeMessage">
                <h3>Welcome to React practice tutorial</h3>
                Please click the links to see the examples.
              </div>
              <Switch>
                <Route path="/propsExample">
                  <PropsExample />
                </Route>
                <Route path="/stateExample">
                  <StateExample />
                </Route>
                <Route path="/eventHandlingExamples">
                  <EventHandlingExamples />
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
