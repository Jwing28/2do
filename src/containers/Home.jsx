import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTodos } from '../redux/todosSlice';
import { Button, Input, Label, Todo } from '../components/index';
import CreateTodo from './CreateTodo';

const mockTodo = {
  text: 'Take out the garbage',
  completed: false,
};

/*
    *Should be straight forward to do in non-relational db. 
    Possible view of state:
    todos = {
        user1: {
            todos: [
                {
                    text: string,
                    completed: boolean,
                    date-created: string
                }
            ]
        }
    }
*/

// Home should manage all the state.
// Making state management simple.
const Home = () => {
  const todos = getTodos();
  console.log({ todos });
  return (
    <div>
      <h1>Todo List</h1>
      <CreateTodo />
      <Todo todo={mockTodo} />
    </div>
  );
};

export default Home;
