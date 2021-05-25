import React from 'react';
import ReactDOM from 'react-dom';

import MainApp from './MainApp';

const data = {
  user: {
    name: 'Arghya Pal',
    address: {
      addressLine1: '4 No Manindranagar',
      addressLine2: 'Cossimbazar Raj',
      district: 'Murshidabad',
      state: 'West Bengal',
      pin: '742102'
    }
  }
};

ReactDOM.render(<MainApp />, document.getElementById('root'));
