import React from 'react';

import { Button, Input, Label } from '../components/index';

import './Containers.scss';

// createTodo will manage its own state for user's entry
// and when user submits
// this (can) be passed to parent, tbd.

// submit your todo here to the redux store..
const CreateTodo = () => {
  const [todo, setTodo] = React.useState('');
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = () => {};

  return (
    <form className='createTodo' onSubmit={() => onSubmit(todo)}>
      <Label>Create Todo</Label>
      <Input placeholder='Enter your todo:' onChange={onChange} />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default CreateTodo;
