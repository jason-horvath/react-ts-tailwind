import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from '@store/reducer';

const store = configureStore({
  reducer: {
    count: countReducer
  }
});

export default store;