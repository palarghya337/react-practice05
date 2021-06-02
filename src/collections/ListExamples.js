import React from 'react';

function ListExamples() {
  const listOfValues = ['value-1', 'value-2', 'value-3', 'value-4'];
  const data = listOfValues.map(value => <div>{value}</div>);
  return <div>{data}</div>;
}
export default ListExamples;
