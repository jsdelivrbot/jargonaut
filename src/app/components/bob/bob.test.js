import React from 'react';
import ReactDOM from 'react-dom';
import Bob from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bob />, div);
  ReactDOM.unmountComponentAtNode(div);
});
