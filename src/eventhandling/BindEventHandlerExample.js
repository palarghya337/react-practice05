import React, { Component } from 'react';
import './../style.css';

/**
 * In this example we will see how to bind the event handler. We need
 * to bind it because "this" will not point to the current object, it
 * will be undefined.
 *
 * We have three ways to bind -
 * 1. bind inside render() method.
 * 2. bind using arrow function inside render() method
 * 3. bind inside constructor.
 */
class BindEventHandlerExample extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: false,
      buttonName: 'Hide'
    };
    // bind inside constructor
    this.changeState = this.changeState.bind(this);
  }

  render() {
    return (
      <div>
        {/* bind inside render() method */}
        <button onClick={this.changeState.bind(this)}>
          {this.state.buttonName}-1
        </button>
        {/* bind using arrow function inside render() method */}
        <button onClick={() => this.changeState()}>
          {this.state.buttonName}-2
        </button>
        <button onClick={this.changeState}>{this.state.buttonName}-3</button>
        <Box isHidden={this.state.isHidden} />
      </div>
    );
  }

  changeState() {
    if (this.state.isHidden === false) {
      this.setState({
        isHidden: true,
        buttonName: 'Show'
      });
    } else {
      this.setState({
        isHidden: false,
        buttonName: 'Hide'
      });
    }
  }
}
export default BindEventHandlerExample;
function Box(props) {
  if (props.isHidden == false) {
    return <div className="squareBox"> Box </div>;
  }
  return null;
}
