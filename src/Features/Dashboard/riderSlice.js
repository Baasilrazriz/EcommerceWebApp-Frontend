// actions.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addRider = createAsyncThunk(
  'Rider/addRider',
  async (riderData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://localhost:7158/Rider', riderData);
      console.log(response.data)
      return response.data; // Assuming the server responds with the created seller data
    } catch (error) {
      return rejectWithValue(error.response.data); // Assuming the server responds with an error message
    }
  }
);
export const UpdateRider = createAsyncThunk(
  'Rider/UpdateRider',
  async (riderData,userId, { rejectWithValue }) => {
    try {
      const response = await axios.put(`https://localhost:7158/Rider/${userId}`,riderData);
      console.log(response.data)
      return response.data; // Assuming the server responds with the created seller data
    } catch (error) {
      return rejectWithValue(error.response.data); // Assuming the server responds with an error message
    }
  }
);
export const fetchRider = createAsyncThunk(
  'Rider/fetchRider', async () => {
  const response = await axios.get("https://localhost:7158/Rider");
  console.log(response.data)
  return response.data;
});
export const fetchRiderByUsername = createAsyncThunk(
  'Rider/fetchRiderByUsername',
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://localhost:7158/Rider/${username}`);
      console.log(response.data)
      return response.data; // Assuming the response contains the category name
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const DeleteRider = createAsyncThunk(
  'Rider/DeleteRider',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`https://localhost:7158/Rider/${userId}`);
      console.log(response.data)
      return response.data; // Assuming the response contains the category name
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const riderSlice = createSlice({
  name: 'user',
  initialState: {
    users:[],
    riderByUsername:[],
    addUserStatus:"",
    fetchUserStatus:"",
    updateUserStatus:"",
    deleteUserStatus:"",
    fetchUserByUsernameStatus:"",
  },
  reducers: {
    setUSerByUser:(state)=>{
      state.userByUsername=[]
    }
  },
  extraReducers: {
    [addRider.pending]: (state) => {
      state.addUserStatus = "pending";
    },
    [addRider.fulfilled]: (state, action) => {
      state.addUserStatus = "success";
      state.error = null;
    },
    [addRider.rejected]: (state, action) => {
      state.addUserStatus = "failed";
      state.error = action.payload || 'Failed to add seller';
    },
    [fetchRider.pending]: (state) => {
      state.fetchUserStatus = "pending";
    },
    [fetchRider.fulfilled]: (state, action) => {
      state.fetchUserStatus = "success";
      state.users = action.payload;
      state.error = null;
    },
    [fetchRider.rejected]: (state, action) => {
      state.fetchUserStatus = "failed";
      state.error = action.payload || 'Failed to add seller';
    },
    [fetchRiderByUsername.fulfilled]: (state, action) => {
      state.fetchUserByUsernameStatus = "success";
      state.riderByUsername = action.payload;
      state.error = null;
    },
    [UpdateRider.fulfilled]: (state, action) => {
      state.updateUserStatus = "success";
      state.error = null;
    },
    [DeleteRider.fulfilled]: (state, action) => {
      state.deleteUserStatus = "success";
      state.error = null;
    },

  },
});

export const {setRiderByUser} = riderSlice.actions;

export default riderSlice.reducer;

