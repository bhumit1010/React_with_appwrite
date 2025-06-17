import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const abcSlice = createSlice({
  name: 'abc',
  initialState,
  reducers: {
    xyz: (state, action) => {
      
    },
  },
});

export const { xyz } = abcSlice.actions;
export default counterSlice.reducer;