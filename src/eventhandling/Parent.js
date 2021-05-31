import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      className: 'Parent'
    };
    this.communicationHandler = this.communicationHandler.bind(this);
  }

  communicationHandler(childName) {
    alert(`This is ${this.state.className} showing from ${childName}.`);
  }
  render() {
    return <Child communicationHandler={this.communicationHandler} />;
  }
}
export default Parent;
