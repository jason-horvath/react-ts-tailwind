import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { TodoItemInterface, TodoItemNewInterface, TodoStateInterface } from '@interface';

const initialState: TodoStateInterface = {
  value: {}
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItemNewInterface>) => {
      const newId: string = uuidv4();
      state.value[newId] = {id: newId, ...action.payload};
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      delete state.value[action.payload];
    },
    updateTodo: (state, action: PayloadAction<TodoItemInterface>) => {
      state.value[action.payload.id] = Object.assign({}, action.payload);
    },
    toggleTodoCompleted: (state, action: PayloadAction<string>) => {
      state.value[action.payload].completed = !state.value[action.payload].completed;
    }
  }
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;