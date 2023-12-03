    // headerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryDropdownOpen: false,
  userDropdownOpen: false,
  CartDropdownOpen:false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleCategoryDropdown: (state) => {
      state.categoryDropdownOpen = !state.categoryDropdownOpen;
    },
    toggleUserDropdown: (state) => {
      state.userDropdownOpen = !state.userDropdownOpen;
    },
    toggleCartDropdown: (state) => {
      state.CartDropdownOpen = !state.CartDropdownOpen;
    },
  },
});

export const { toggleCategoryDropdown, toggleUserDropdown,toggleCartDropdown } = headerSlice.actions;
export default headerSlice.reducer;
