import React from 'react';

import { Button, Checkbox, Input } from './index';
// input - type your to do
// checkbox - check that you've completed it - then a strike through appears or disappears
// button to delete it - won't be saved.

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
