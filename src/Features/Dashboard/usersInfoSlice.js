// actions.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
export const addUser = createAsyncThunk(
  'User/addUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://localhost:7158/User/Createuser', userData);
      console.log(response.data)
      return response.data; // Assuming the server responds with the created seller data
    } catch (error) {
      return rejectWithValue(error.response.data); // Assuming the server responds with an error message
    }
  }
);
export const UpdateUser = createAsyncThunk(
  'User/UpdateUser',
  async (userData,userId, { rejectWithValue }) => {
    try {
      const response = await axios.put(`https://localhost:7158/User/${userId}`, userData);
      console.log(response.data)
      return response.data; // Assuming the server responds with the created seller data
    } catch (error) {
      return rejectWithValue(error.response.data); // Assuming the server responds with an error message
    }
  }
);
export const fetchUsers = createAsyncThunk(
  'User/fetchUsers', async () => {
  const response = await axios.get("https://localhost:7158/User");
  console.log(response.data)
  return response.data;
});
export const fetchUserByUsername = createAsyncThunk(
  'User/fetchUserByUsername',
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://localhost:7158/User/${username}`);
      console.log(response.data)
      return response.data; // Assuming the response contains the category name
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const DeleteUser = createAsyncThunk(
  'User/DeleteUser',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`https://localhost:7158/User/${userId}`);
      console.log(response.data)
      return response.data; // Assuming the response contains the category name
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const usersInfoSlice = createSlice({
  name: 'user',
  initialState: {
    users:[],
    userByUsername:[],
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
    [addUser.pending]: (state) => {
      state.addUserStatus = "pending";
    },
    [addUser.fulfilled]: (state, action) => {
      state.addUserStatus = "success";
      state.error = null;
      toast.success("added successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
      });

    },
    [addUser.rejected]: (state, action) => {
      state.addUserStatus = "failed";
      state.error = action.payload || 'Failed to add seller';
    },
    [fetchUsers.pending]: (state) => {
      state.fetchUserStatus = "pending";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.fetchUserStatus = "success";
      state.users = action.payload;
      state.error = null;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.fetchUserStatus = "failed";
      state.error = action.payload || 'Failed to add seller';
    },
    [fetchUserByUsername.fulfilled]: (state, action) => {
      state.fetchUserByUsernameStatus = "success";
      state.userByUsername = action.payload;
      state.error = null;
    },
    [UpdateUser.fulfilled]: (state, action) => {
      state.updateUserStatus = "success";
      state.error = null;
    },
    [DeleteUser.fulfilled]: (state, action) => {
      state.deleteUserStatus = "success";

      toast.success("user deleted successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
      });

    },

  },
});

export const {setUSerByUser} = usersInfoSlice.actions;

export default usersInfoSlice.reducer;

