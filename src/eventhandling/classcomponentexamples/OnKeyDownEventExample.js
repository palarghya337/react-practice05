import React, { Component } from 'react';

export default class OnKeyDownEventExample extends Component {
  constructor() {
    super();
  }
  toDoWhenKeyDown() {
    alert('You pressed a key inside the input field');
  }
  render() {
    return (
      <div>
        <input id="keyDownExample" type="text" onKeyDown={toDoWhenKeyDown} />
      </div>
    );
  }
}
