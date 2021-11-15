import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { coalesceEmptyToZero } from '@utility/value/coalesceEmptyToZero';

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
    decrementBy: (state, action: PayloadAction<string | number | undefined>) => {
      state.value -= coalesceEmptyToZero(action.payload);
    },
    incrementBy: (state, action: PayloadAction<string | number | undefined>) => {
      state.value += coalesceEmptyToZero(action.payload);
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