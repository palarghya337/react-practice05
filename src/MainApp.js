import React from 'react';
import './style.css';
import PropsExample from './props/PropsExample';
import StateExample from './state/StateExample';

function MainApp() {
  return (
    <div>
      <div className="border">
        <PropsExample />
      </div>
      <p className="border">
        <StateExample />
      </p>
    </div>
  );
}
export default MainApp;
