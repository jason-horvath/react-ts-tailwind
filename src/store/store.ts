import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from '@store/reducer';
import { todoReducer } from '@store/reducer';

const store = configureStore({
  reducer: {
    count: countReducer,
    todo: todoReducer,
  }
});

export default store;