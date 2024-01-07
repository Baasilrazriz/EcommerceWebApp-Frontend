import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl="https://localhost:7158/Product";
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});
const initialState={
  isProfileModalOpen: false,
  profileinfo:[
    
  ],
  
}
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: { 
    openProfileModal: (state) => {
        state.isLoginModalOpen = true;
      },
      closeProfileModal: (state) => {
        state.isLoginModalOpen = false;
      },
},
extraReducers: (builder) => {
  builder
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.profileinfo = action.payload;
    })
    
},

});

export const {closeProfileModal,openProfileModal} = profileSlice.actions;
export default profileSlice.reducer;
