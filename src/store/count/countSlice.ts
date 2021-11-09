import { createSlice } from '@reduxjs/toolkit';

export const countSlice = createSlice({
  name: 'count',
  initialState: {
    value: 0
  },
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrementBy: (state, action) => {
      console.log(action.payload);
      state.value -= parseInt(action.payload);
    },
    incrementBy: (state, action) => {
      state.value += parseInt(action.payload);
    },
    setCount(state, action) {
      if(typeof action.payload == 'number') {
        state.value = action.payload;
      }
    }
  }
});

export const countActions = countSlice.actions;

export default countSlice.reducer;