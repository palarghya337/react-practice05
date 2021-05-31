import React from 'react';

export default function OnKeyDownEventExample() {
  function toDoWhenKeyDown() {
    alert('You pressed a key inside the input field');
  }
  return (
    <div>
      <input id="keyDownExample" type="text" onKeyDown={toDoWhenKeyDown} />
    </div>
  );
}
