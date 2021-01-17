import React from 'react';

import './Components.scss';

const Checkbox = ({ onChange, checked = false }) => {
  return (
    <input
      className='checkbox'
      type='Checkbox'
      onChange={onChange}
      checked={checked}
    />
  );
};

export { Checkbox };
