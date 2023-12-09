import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the URL of the login API
const LOGIN_API_URL = 'https://10.133.134.40:44369/Auth/login';

// Async thunk action for logging in
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_API_URL, credentials);
      // You might want to store the token you get from the response in local storage or in the state
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk action for logging out
export const logoutUser = createAsyncThunk('login/logoutUser', async () => {
  // Perform any necessary cleanup, like removing the token from local storage
});

export const userSlice = createSlice({
  name: 'login',
  initialState: {
    role: null,
    username: '',
    isAuthenticated: false,
    password: '',
  },
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload.role;
    },
    setUsername: (state, action) => {
      state.username = action.payload.username;
    },
    setPassword: (state, action) => {
      state.password = action.payload.password;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      // Set other user info from action.payload if needed
    },
    [loginUser.rejected]: (state, action) => {
      state.isAuthenticated = false;
      // You may want to handle the error
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.isAuthenticated = false;
      // Reset state to initial state or perform other cleanup
    },
    // Handle pending and rejected states if necessary
  },
});

export const { setUserRole, setUsername, setPassword } = userSlice.actions;

export default userSlice.reducer;
