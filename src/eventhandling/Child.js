import React from 'react';

export default function Child(props) {
  return (
    <div>
      <button onClick={() => props.communicationHandler('Child')}>
        Show Communication
      </button>
    </div>
  );
}
