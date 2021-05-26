import React from 'react';
import './../style.css';

function Message(props) {
  return (
    <div>
      {props.name} is a {props.job}
      <div class="tabby10px fontsizesmall">{props.children}</div>
    </div>
  );
}
export default Message;
