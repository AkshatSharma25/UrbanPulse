// windowToggleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const windowToggleSlice = createSlice({
  name: 'windowToggle',
  initialState,
  reducers: {
    toggleWindow: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleWindow } = windowToggleSlice.actions;
export default windowToggleSlice.reducer;
