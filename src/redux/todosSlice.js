import { createSlice } from '@reduxjs/toolkit';

// array (todos) of objects (todo)
// think about this data structure and what that means for this file
export const counterSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    toggleComplete: (state) => {
      state = state.todos.map((todo) => {
        if (state.id === todo.id) {
          state.completed = !state.completed;
        }
      });
    },
    getTodos: (state) => {
      return state.todos;
    },
    deleteTodos: (state) => {
      state.todos = [];
    },
    addTodo: (state, action) => {
      // where todo = { id: number, text: string, completed: boolean}
      const { todo } = action;
      // if 3 todos, and id's = 0, 1, 2:
      // this new todo is id 3
      const newTodo = {
        ...todo,
        id: state.todos.length,
      };
      state.todos.push(newTodo);
    },
    editTodo: (state) => {
      // in this case, id is also the index.
      const currentTodoIdx = state.todos.find((todo) => todo.id === state.id)
        .id;
      state.todos[currentTodoIdx] = state.todo;
    },
    // remove the
    deleteTodo: (state) => {
      // in this case, id is also the index.
      const removedTodoIdx = state.todos.find((todo) => todo.id === state.id)
        .id;
      // check code on splice
      state.todos = state.todos.splice(removedTodoIdx, 1);
    },
  },
});

export const {
  getTodos,
  deleteTodos,
  toggleComplete,
  addTodo,
  deleteTodo,
} = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;

/*

for now: assume only one user exists.

later: 
todos = {
  userid: [todos],
  userid: [todos]
}


*/
