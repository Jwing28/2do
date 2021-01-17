import React from 'react';

import { Button, Checkbox, Input } from './index';

const Todo = ({ toggleComplete, onDelete, text }) => {
  return (
    <div>
      {text}
      <Checkbox onChange={toggleComplete} />
      <Button onClick={onDelete}>Delete</Button>
    </div>
  );
};

export { Todo };
