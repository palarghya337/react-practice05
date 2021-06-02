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

  const userData = arrayOfUsers.map(user => <User user={user} />);

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
