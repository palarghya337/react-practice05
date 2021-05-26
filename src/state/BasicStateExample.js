import React, { Component } from 'react';

class BasicStateExample extends Component {
  /**
   * State is managed within component.
   * State can be changed.
   * State is an object that is privately maintained inside a componenet.
   */
  constructor() {
    // supoer method is required.
    super();
    // state is a reserved keyword
    this.state = {
      message: 'React State Tutorial'
    };
    this.flag = true;
    this.buttonName = 'Enter';
  }
  render() {
    return (
      <div>
        {this.state.message}
        <div>
          <button onClick={() => this.changeMessage()}>
            {this.buttonName}
          </button>
        </div>
      </div>
    );
  }
  changeMessage() {
    if (this.flag == true) {
      this.setState({ message: 'Welcome to react state tutorial.' });
      this.flag = false;
      this.buttonName = 'Back';
    } else {
      this.setState({ message: 'React State Tutorial' });
      this.flag = true;
      this.buttonName = 'Enter';
    }
  }
}
export default BasicStateExample;
