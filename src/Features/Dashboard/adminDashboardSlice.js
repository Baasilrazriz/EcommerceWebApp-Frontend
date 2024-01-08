// actions.js
import { createSlice } from '@reduxjs/toolkit';

const adminDashboardSlice = createSlice({
  name: 'adminDashboard',
  initialState: {
    step: 1, 

  },
  reducers: {
    setselectedDropdownValue: (state, action) => {
        state.selectedDropdownValue = action.payload;
      },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMedium: (state, action) => {
      state.medium = action.payload;
    },
    setOTP: (state, action) => {
      state.otp = action.payload;
    },
    setNewPassword: (state, action) => {
      state.newPassword = action.payload;
    },
    openforgotModal: (state) => {
      state.isForgotModalOpen = true;
    },
    closeforgotModal: (state) => {
      state.isForgotModalOpen = false;
    },
  },
});

export const {setselectedDropdownValue,openforgotModal, setEmail,closeforgotModal, setStep, setUsername, setMedium, setOTP, setNewPassword } = adminDashboardSlice.actions;

export default adminDashboardSlice.reducer;

