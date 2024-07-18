// loaderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    isLoading: false // Initial loader state as a boolean
  },
  reducers: {
    startLoading(state) {
      state.isLoading = true; // Set loader state to true (loading)
    },
    stopLoading(state) {
      state.isLoading = false; // Set loader state to false (not loading)
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading; // Toggle loader state
    }
  }
});

export const { startLoading, stopLoading, toggleLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
