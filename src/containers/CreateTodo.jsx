import React from 'react';

import { Button, Input, Label } from '../components/index';

import './Containers.scss';

// createTodo will manage its own state for user's entry
// and when user submits
// this (can) be passed to parent, tbd.
const CreateTodo = ({ onSubmit }) => {
  return (
    <form className='createTodo' onSubmit={onSubmit}>
      <Label>Create Todo</Label>
      <Input placeholder='Enter your todo:' />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default CreateTodo;
