import React from 'react';

import './Components.scss';

const Checkbox = ({ onChange }) => {
  return <input className='checkbox' type='Checkbox' onChange={onChange} />;
};

export { Checkbox };
