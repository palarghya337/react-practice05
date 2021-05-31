import React, { Component } from 'react';

/**
 * Eevnt handling using functional Component
 */
export default class OnClickEventExample extends Component {
  toDoWhenButtonClicked() {
    alert('On click event.');
  }
  render() {
    return (
      <div>
        <button onClick={toDoWhenButtonClicked}>Click Me</button>
      </div>
    );
  }
}
