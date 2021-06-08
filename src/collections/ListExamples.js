import React from 'react';
import User from './User';
import arrayOfUsers from './../data/Users';
import './collections.css';

function ListExamples() {
  const listOfValues = [];
  for (let i = 0; i < 5; i++) {
    listOfValues[i] = 'value-' + i;
  }
  console.log(arrayOfUsers);
  /**
   * Key propety is reserved and is used to render list efficiently. It helps to identify
   * which item in the list has changed or added or removed and plays a crutial role to
   * handle UI updates
   *
   * Wath below video to understand it in a better way.
   * https://youtu.be/0sasRxl35_8
   */
  return (
    <div>
      <div className="add_space_below">
        {listOfValues.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
      <table className="add_space_below">
        <thead>
          <tr>
            <th>ID/Index</th>
            <th>Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {arrayOfUsers.map(user => (
            <User key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <div className="add_space_below"> We can also use index as a key </div>
      <div className="fontsizesmall">
        <i>
          <b>
            Need to fix Warning: validateDOMNesting(...): &lt;tr&gt; cannot
            appear as a child of &lt;table&gt;. Add a &lt;tbody&gt;,
            &lt;thead&gt; or &lt;tfoot&gt; to your code to match the DOM tree
            generated by the browser.
          </b>
        </i>
      </div>
    </div>
  );
}
export default ListExamples;
