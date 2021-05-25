import React from 'react';

function Message(props) {
  return (
    <div>
      {props.name} is a {props.job}
    </div>
  );
}
export default Message;
