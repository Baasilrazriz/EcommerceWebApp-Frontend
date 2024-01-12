    // headerSlice.js
    import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
      userDropdownOpen: false,
      module:"",
      confirm:false,
    };
    
    const LandingPageSlice = createSlice({
      name: 'landingPage',
      initialState,
      reducers: {
        setConfirm:(state,action)=>{
          state.confirm=!state.confirm;
        },
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
    
    export const {setModule, setConfirm,toggleUserDropdown,CloseUserDropdown,OpenUserDropdown } = LandingPageSlice.actions;
    export default LandingPageSlice.reducer;
    