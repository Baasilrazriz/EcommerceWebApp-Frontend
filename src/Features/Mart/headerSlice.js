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
    OpenCategoryDropdown: (state) => {
      state.categoryDropdownOpen = true;
    },
    CloseCategoryDropdown:(state)=>{
      state.categoryDropdownOpen = false;
    },
    OpenUserDropdown: (state) => {
      state.userDropdownOpen = true;
    },
    CloseUserDropdown:(state)=>{
      state.userDropdownOpen = false;
    },
    toggleUserDropdown: (state) => {
      state.userDropdownOpen = !state.userDropdownOpen;
    },
    toggleCartDropdown: (state) => {
      state.CartDropdownOpen = !state.CartDropdownOpen;
    },
  },
});

export const { toggleCategoryDropdown,toggleUserDropdown, CloseUserDropdown,OpenUserDropdown,CloseCategoryDropdown,OpenCategoryDropdown } = headerSlice.actions;
export default headerSlice.reducer;
