import React from 'react';
import './../style.css';

function Message(props) {
  /**
   * We are doing destructuring in below mentioned way.
   */
  const { propValue1, propValue2 } = props;
  return (
    <div>
      <div>
        <b>propValue1:</b> {propValue1}.
      </div>
      <div>
        <b>propValue2:</b> {propValue2}.
      </div>
      <div className="tabby10px fontsizesmall">{props.children}</div>
    </div>
  );
}
export default Message;
