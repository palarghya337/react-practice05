import React from 'react';
import OnClickEventExample from './functionalcomponentexamples/OnClickEventExample';
import OnChangeEventExample from './functionalcomponentexamples/OnChangeEventExample';
import OnKeyDownEventExample from './functionalcomponentexamples/OnKeyDownEventExample';
import BindEventHandlerExample from './BindEventHandlerExample';
import Parent from './Parent';

function EventHandlingExamples() {
  return (
    <div>
      <div>
        <b>On Click Event Example</b>
      </div>
      <OnClickEventExample />
      <div>
        <b>On Change Event Example</b>
      </div>
      <OnChangeEventExample />
      <div>
        <b>On Key Down Event Example</b>
      </div>
      <OnKeyDownEventExample />
      <div>
        <b>Binding Event Handler Example</b>
      </div>
      <BindEventHandlerExample />
      <p>
        <div>
          <b>Parent child communication Example</b>
        </div>
        <Parent />
      </p>
    </div>
  );
}
export default EventHandlingExamples;
