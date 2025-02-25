import { createSlice } from '@reduxjs/toolkit';

export const countSlice = createSlice({
  name: 'count',
  initialState: {
    text: ""
  },
  reducers: {
    addColor: (color) => {
        if (color.text == "red") {
            color.style.backgroundColor = "red"
        }
    }
  }
});

export const {addColor} = countSlice.actions;

export default countSlice.reducer;