import React from 'react';

function Message(props) {
  return (
    <div>
      {props.name} is a {props.job}
      <div>{props.children}</div>
    </div>
  );
}
export default Message;
