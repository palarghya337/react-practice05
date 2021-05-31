import React from 'react';

/**
 * In this example we are counting the number of input letters in the
 * text box. if count is more ten, we are showing the alert.
 */
export default function OnChangeEventExample() {
  function toDoWhenOnChange() {
    // getting the input type text object
    var data = document.getElementById('onChangeEventExample');
    /**
     * checking whether length of the input is 10 or not. If length
     * is 10 then we are showing alert message.
     */
    if (data.value.length === 10) {
      alert('On change event occurrend.');
    }
    // getting and printing the length of inputted text.
    var label = document.getElementById('label');
    label.innerHTML = data.value.length;
  }
  return (
    <div>
      <input
        id="onChangeEventExample"
        type="text"
        onChange={toDoWhenOnChange}
      />
      <div>
        Text Count:
        <i id="label" />
      </div>
    </div>
  );
}
