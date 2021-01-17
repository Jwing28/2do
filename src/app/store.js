import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import todosReducer from '../redux/todosSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});
