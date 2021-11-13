import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TodoItemInterface, TodoStateInterface } from '@interface';

const initialState: TodoStateInterface = {
  value: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItemInterface>) => {
      state.value.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<TodoItemInterface>) => {
      
    }
  }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;