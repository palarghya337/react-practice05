import React from 'react';
import Message from './Message';

function PropsExample() {
  /**
   * Props get passed to the components.
   * Props are immutable
   */
  return (
    <div>
      <b>
        <u>
          First <i>Message</i> tag-
        </u>
      </b>
      <Message
        propValue1="First Property Value"
        propValue2="Second Property Value"
      >
        Child Property value
      </Message>
      <b>
        <u>
          Second <i>Message</i> tag-
        </u>
      </b>
      <Message
        propValue1="1st Property Value"
        propValue2="2nd Property Value"
      />
    </div>
  );
}
export default PropsExample;
