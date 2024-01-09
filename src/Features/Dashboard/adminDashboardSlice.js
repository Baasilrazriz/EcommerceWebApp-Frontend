// actions.js
import { createSlice } from '@reduxjs/toolkit';

const adminDashboardSlice = createSlice({
  name: 'adminDashboard',
  initialState: {
    page: 1, 
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {setselectedDropdownValue,openforgotModal, setEmail,closeforgotModal, setPage, setUsername, setMedium, setOTP, setNewPassword } = adminDashboardSlice.actions;

export default adminDashboardSlice.reducer;

