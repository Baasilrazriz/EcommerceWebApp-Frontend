
import { createSlice } from '@reduxjs/toolkit';

export const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    toggle: false,
  },
  reducers: {
    setToggle: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { setToggle } = bannerSlice.actions;

export default bannerSlice.reducer;
