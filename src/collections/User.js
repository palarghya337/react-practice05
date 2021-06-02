import React from 'react';

function User({ user }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.dateOfBirth.toDateString()}</td>
    </tr>
  );
}
export default User;
