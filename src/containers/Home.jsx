import React from 'react';

import { Button, Input, Label, Todo } from '../components/index';

const mockTodo = {
  text: '',
};

const Home = () => {
  return (
    <div>
      <Input />
      <Label>Test Label</Label>
      <Button>Test Button</Button>
      <Todo todo={mockTodo} />
    </div>
  );
};

export default Home;
