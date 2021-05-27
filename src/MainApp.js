import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './style.css';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';

class MainApp extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Router>
          <Link to="/" level="Home" target={'_blank'}>
            Home
          </Link>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MainApp;
