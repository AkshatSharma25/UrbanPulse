import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    text: ""
};

const textSlice = createSlice({
    name: 'SearchText',
    initialState,
    reducers: {
        setText(state, action) {
            state.text = action.payload;
        },
        clearText(state) {
            state.text = "";
        }
    }
});

export const { setText, clearText } = textSlice.actions;
export default textSlice.reducer;
