import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './style.css';
import PropsExample from './props/PropsExample';
import StateExample from './state/StateExample';
import EventHandlingExamples from './eventhandling/EventHandlingExamples';
import CollectionsExample from './collections/CollectionsExample';
import AddUser from './forms/AddUser';

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
        <table>
          <tbody>
            <tr>
              <td className="reactIndex">
                <div className="reactIndex mouseHover">
                  <Link to="/" onClick={showHomeMessage}>
                    Home
                  </Link>
                </div>
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
                <div className="reactIndex mouseHover">
                  <Link to="/collections" onClick={hideHomeMessage}>
                    Collections
                  </Link>
                </div>
                <div className="reactIndex mouseHover">
                  <Link to="/forms" onClick={hideHomeMessage}>
                    Forms
                  </Link>
                </div>
              </td>
              <td className="margin-center mainTable">
                <div id="welcomeMessage">
                  <h3>Welcome to React practice tutorial</h3>
                  Please click on the links to see the examples.
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
                  <Route path="/collections">
                    <CollectionsExample />
                  </Route>
                  <Route path="/forms">
                    <AddUser />
                  </Route>
                </Switch>
              </td>
            </tr>
          </tbody>
        </table>
      </Router>
    </div>
  );
}

export default MainApp;
