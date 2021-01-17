import { createSlice } from '@reduxjs/toolkit';

// array (todos) of objects (todo)
// think about this data structure and what that means for this file
export const counterSlice = createSlice({
  name: 'todo',
  initialState: {
    text: '',
    completed: false,
  },
  reducers: {
    completed: (state) => {
      state.completed = !state.completed;
    },
    // remove the
    delete: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
