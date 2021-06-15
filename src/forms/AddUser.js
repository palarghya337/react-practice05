import React, { Component } from 'react';
import arrayOfUsers from './../data/Users';

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      type: 'Select Type',
      dateOfBirth: new Date()
    };
    this.hanleSubmitEvent.bind();
  }

  hanleSubmitEvent(event) {
    const { type, name, dob } = this.state;
    arrayOfUsers.push({
      id: 1004,
      type: { type },
      name: { name },
      dateOfBirth: new Date(dob)
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={event => this.hanleSubmitEvent(event)}>
        <input
          type="text"
          placeholder="User Name"
          value={this.state.name}
          onChange={event => this.setState({ name: event.value })}
        />
        <br />
        <select
          value={this.state.type}
          onChange={event => this.setState({ type: event.value })}
        >
          <option value="Select Type">Select Type</option>
          <option value="Employee">Employee</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>
        <br />
        <input
          type="date"
          value={this.state.dateOfBirth}
          onChange={event => this.setState({ dateOfBirth: event.value })}
        />
        <br />
        <input type="submit" />
        <br />
        Need to fix
      </form>
    );
  }
}
export default AddUser;
