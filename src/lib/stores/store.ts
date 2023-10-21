import { configureStore } from '@reduxjs/toolkit';

import settingsReducer from './settingsSlice';
import contentReducer from './contentSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    content: contentReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
