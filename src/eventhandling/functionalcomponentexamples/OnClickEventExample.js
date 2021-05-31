import React from 'react';

/**
 * Eevnt handling using functional Component
 */
export default function OnClickEventExample() {
  function toDoWhenButtonClicked() {
    alert('On click event.');
  }
  return (
    <div>
      <button onClick={toDoWhenButtonClicked}>Click Me</button>
    </div>
  );
}
