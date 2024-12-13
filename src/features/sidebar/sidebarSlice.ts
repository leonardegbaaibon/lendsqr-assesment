// features/sidebar/sidebarSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  activePath: string;
}

const initialState: SidebarState = {
  activePath: '/users', // Default active path
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setActivePath(state, action: PayloadAction<string>) {
      state.activePath = action.payload;
    },
  },
});

export const { setActivePath } = sidebarSlice.actions;

export default sidebarSlice.reducer;
