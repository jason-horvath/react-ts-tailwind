import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TodoItemInterface, TodoStateInterface } from '@interface';

const initialState: TodoStateInterface = {
  value: []
}
const newId = (todos: TodoItemInterface[]) => {
  let newId = todos.reduce((id: number, todo: TodoItemInterface) => {
    if(id !== undefined && id < todo?.id) return todo.id;
    return id;
  }, 0);
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
      state.value = state.value.map((todo) => {
        return (todo.id === action.payload.id) ?
          Object.assign({}, action.payload) : todo ;
      });
    }
  }
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;