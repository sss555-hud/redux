import { createSlice } from '@reduxjs/toolkit';

export const countSlice = createSlice({
  name: 'count',
  initialState: {
    timer: 0,
    text: ""
  },
  reducers: { 
    addTimer: (state) => {
      state.timer += 1;
    },
    subtractTimer: (state) => {
        if (state.timer > 0) {
            state.timer -= 1;
          }
    },
    setText: (state, action) => {
        console.log(action.payload);
        
        state.text = action.payload;
    }
  },
});

export const { addTimer, subtractTimer, setText } = countSlice.actions;

export default countSlice.reducer;
