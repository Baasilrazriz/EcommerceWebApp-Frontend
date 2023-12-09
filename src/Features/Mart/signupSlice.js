// actions.js
import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    step: 1, 
    isSignupModalOpen:false,
  },
  reducers: {
    setStep: (state, action) => {
        state.step = action.payload;
      },
    openSignupModal: (state) => {
      state.isSignupModalOpen = true;
    },
    closeSignupModal: (state) => {
      state.isSignupModalOpen = false;
    },
  },
});

export const {openSignupModal ,closeSignupModal,setStep} = signupSlice.actions;

export default signupSlice.reducer;

