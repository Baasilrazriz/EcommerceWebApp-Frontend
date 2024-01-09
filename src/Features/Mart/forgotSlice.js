// actions.js
import { createSlice } from '@reduxjs/toolkit';
// https://localhost:7158/Forgot/ValidateUsername

const forgotSlice = createSlice({
  name: 'forgot',
  initialState: {
    step: 1, 
    username: '',
    email:'',
    medium: '',
    otp: '',
    isForgotModalOpen:false,
    newPassword: '',
    selectedDropdownValue: '',
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

export const {setselectedDropdownValue,openforgotModal, setEmail,closeforgotModal, setStep, setUsername, setMedium, setOTP, setNewPassword } = forgotSlice.actions;

export default forgotSlice.reducer;

