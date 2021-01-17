import React from 'react';

import './Components.scss';

const Button = ({ children }) => {
  return <button className='btn'>{children}</button>;
};

export { Button };
