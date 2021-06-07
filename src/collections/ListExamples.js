import React from 'react';
import User from './User';
import arrayOfUsers from './../data/Users';
import './collections.css';

function ListExamples() {
  const listOfValues = [];
  for (let i = 0; i < 5; i++) {
    listOfValues[i] = 'value-' + i;
  }
  const data = listOfValues.map(value => <div>{value}</div>);
  console.log(arrayOfUsers);

  /**
   * Key propety is reserved and is used to render list efficiently. It helps to identify
   * which item in the list has changed or added or removed and plays a crutial role to
   * handle UI updates
   *
   * Wath below video to understand it in a better way.
   * https://youtu.be/0sasRxl35_8
   */
  const userData = arrayOfUsers.map(user => <User key={user.id} user={user} />);

  return (
    <div>
      <div>{data}</div>
      <table>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
        </tr>
        {userData}
      </table>
    </div>
  );
}
export default ListExamples;
