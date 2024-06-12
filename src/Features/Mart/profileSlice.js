import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
export const fetchProfile = createAsyncThunk(
    'User/fetchProfile',
    async (username, { rejectWithValue }) => {
      try {
        
        const response = await axios.get(`https://localhost:7158/User/${username.username}`);
        console.log(response.data)  
        return response.data; // Assuming the response contains the cart items
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
const initialState = {
  isProfileModalOpen: false,
  fetchProfileStatus:"",
  profileInfo:[],
//   isLoggedIn:false,
//   role: null,
//   userId:null,
//   username: '',
//   email:'',
//   isAuthenticated: false,
//   password: '',
//   profilepic:'',
//   showPassword:false
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    openProfileModal: (state) => {
      state.isProfileModalOpen = true;
    },
    closeProfileModal: (state) => {
      state.isProfileModalOpen = false;
      state.fetchProfileStatus="";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
state.fetchProfileStatus="pending";        
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.fetchProfileStatus="success";        
state.profileInfo=action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.fetchProfileStatus="failed";        
      })
  },  
});

export const { openProfileModal, closeProfileModal } = profileSlice.actions;
export default profileSlice.reducer;
