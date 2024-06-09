import { createSlice } from '@reduxjs/toolkit';

const sellerDashboardSlice = createSlice({
  name: 'sellerDashboard',
  initialState: {
    page: 1, 
  },
  reducers: {
    setSellerPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {setSellerPage } = sellerDashboardSlice.actions;

export default sellerDashboardSlice.reducer;

