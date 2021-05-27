import React from 'react';
import './../style.css';

function Message(props) {
  /**
   * We are doing destructuring in below mentioned way.
   */
  const { name, job } = props;
  return (
    <div>
      {name} is a {job}
      <div class="tabby10px fontsizesmall">{props.children}</div>
    </div>
  );
}
export default Message;
