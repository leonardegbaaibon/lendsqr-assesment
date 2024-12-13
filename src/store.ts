// store.ts
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './features/sidebar/sidebarSlice';
import userReducer from './features/user/userSlice';

 const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer,
  },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
  