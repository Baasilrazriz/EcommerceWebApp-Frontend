// navigationSlice.js
import { createSlice } from '@reduxjs/toolkit';

 const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    activeStep: 0,
  },
  reducers: {
    goToNextStep: (state) => {
      state.activeStep = state.activeStep < 2 ? state.activeStep + 1 : state.activeStep;
    },
    goToPreviousStep: (state) => {
      state.activeStep = state.activeStep > 0 ? state.activeStep - 1 : state.activeStep;
    },
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
  },
});

export const { goToNextStep, goToPreviousStep, setActiveStep } = navigationSlice.actions;

export default navigationSlice.reducer;