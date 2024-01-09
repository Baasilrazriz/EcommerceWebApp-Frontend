    // headerSlice.js
    import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
      userDropdownOpen: false,
      module:"",
    };
    
    const LandingPageSlice = createSlice({
      name: 'landingPage',
      initialState,
      reducers: {
        setModule:(state,action)=>{
          state.module= action.payload;
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
        
        
      },
    });
    
    export const {setModule, toggleUserDropdown,CloseUserDropdown,OpenUserDropdown } = LandingPageSlice.actions;
    export default LandingPageSlice.reducer;
    