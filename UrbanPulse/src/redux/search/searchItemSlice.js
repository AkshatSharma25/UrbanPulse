// slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []  // Initial state with an empty array
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload); // Add item to the array
    }
  }
});

export const { addItem } = itemsSlice.actions;
export default itemsSlice.reducer;
