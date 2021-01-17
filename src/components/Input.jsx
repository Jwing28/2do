import React from 'react';

import './Components.scss';

const Input = ({ onChange, placeholder, isActive = false }) => {
  return (
    <input
      className='input'
      onChange={onChange}
      placeholder={placeholder}
      disabled={isActive}
    />
  );
};

export { Input };
