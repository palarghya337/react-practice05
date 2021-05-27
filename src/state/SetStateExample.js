import React, { Component } from 'react';

class SetStateExample extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        Button Click Count: {this.state.count}
        <div>
          <button onClick={() => this.incrementCount()}>Click</button>
          <button onClick={() => this.resetCount()}>Reset Count</button>
          <button onClick={() => this.incrementByFive()}>Increment 5x</button>
        </div>
        <div>{this.message}</div>
      </div>
    );
  }

  incrementByFive() {
    /**
     * Below 5 times call to incrementCount() method should update the
     * count value to 5 times but that is not going to happen. This
     * is because react make a groupe with multiple setState() calls
     * into a single update for better performance.
     */
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  resetCount() {
    this.setState({ count: 0 });
  }
  incrementCount() {
    /**
     * We can not directly update the value of a state.
     * The only place where you can assign this.state is the constructor.
     * Comment out lin 48 to 52 and uncomment line 53 to 57
     */
    this.state.count = this.state.count + 1;
    alert(
      'We can not directly update the value of a state.\n' +
        'Please go to source code and check what to do next.'
    );

    // this.setState({ count: this.state.count + 1 }, () =>
    //   console.log('Callback value ', this.state.count)
    // );

    // this.setState(previousState => ({
    //   count: previousState.count + 1
    // }));

    /**
     * When you see the console log you will find the value of count
     * is 1 less than the value showing in the UI. The reason is
     * setState() method calls are asynchronus so console.log() method
     * executes before setState() executes.
     * To handle this type of scenarios we can use call back function,
     * where we can use the latest value of a state to do some other
     * operations. The first parameter in a setState() method is object
     * and the second parameter is the callback function where we can
     * get the latest value by which we can do some operations.
     */
    console.log('Inside incrementCount() method: ' + this.state.count);
  }

  componentDidMount() {
    this.message = this.message;
    console.log('did', this.message);
  }
  componentWillUnmount() {
    this.message = this.message;
  }
}
export default SetStateExample;
