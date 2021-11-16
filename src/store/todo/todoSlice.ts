import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TodoItemInterface, TodoItemNewInterface, TodoStateInterface } from '@interface';
import { autoIncrementKey } from '@utility/array/autoIncrementKey';

const initialState: TodoStateInterface = {
  value: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItemNewInterface>) => {
      const nextId: number = autoIncrementKey(state.value);
      state.value[nextId] = {id: nextId, ...action.payload};
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      // state.value.delete(action.payload);
    },
    updateTodo: (state, action: PayloadAction<TodoItemInterface>) => {
      state.value[action.payload.id] = Object.assign({}, action.payload);
    },
    toggleTodoCompleted: (state, action: PayloadAction<number>) => {
      state.value[action.payload].completed = !state.value[action.payload].completed;
    }
  }
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;