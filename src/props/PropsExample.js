import React from 'react';
import Message from './Message';

function PropsExample() {
  /**
   * Props get passed to the components.
   * Props are immutable
   */
  return (
    <div>
      <Message name="Arghya" job="Software Engineer">
        He lives in Manindranagar.
      </Message>
      <Message name="Kunal" job="Electrical Engineer">
        He live in Nimtala
      </Message>
    </div>
  );
}
export default PropsExample;
