import React, { Component } from 'react';

class ShowTime extends Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
export default ShowTime;
