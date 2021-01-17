import React from 'react';

import { Button, Checkbox, Input } from './index';

const Todo = ({ todo = {}, onDelete, toggleComplete }) => {
  const { text, completed } = todo;
  console.log(todo);
  return (
    <div className='todo'>
      <div className={completed ? 'completed' : ''}>{text}</div>
      <div className='completed-container'>
        <label>Completed?</label>
        <Checkbox onChange={toggleComplete} />
      </div>
      <Button onClick={onDelete}>Delete</Button>
    </div>
  );
};

export { Todo };
