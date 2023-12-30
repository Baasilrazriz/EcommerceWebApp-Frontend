import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the URL of the login API
const LOGIN_API_URL = 'https://localhost:7158/Auth/login';

// Async thunk action for logging in
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_API_URL, credentials);
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

const initialState = {
  isLoginModalOpen: false,
  isLoggedIn:false,
  role: null,
  username: '',
  email:'',
  isAuthenticated: false,
  password: '',
  profilepic:'',
  showPassword:false
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.isLoggedIn =true;
    },
    loggedOut: (state) => {
      state.isLoggedIn =false;
    },
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
    togglePasswordVisibility:(state)=>{
      state.showPassword = !state.showPassword;
    },
    setProfilePic:(state,action)=>{
      state.profilepic = action.payload;
    },
    setEmail:(state,action)=>{
      state.email = action.payload;
    },
    setUserRole: (state, action) => {
      state.role = action.payload.role;
    },
    setUsernames: (state, action) => {
      state.username = action.payload;
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

export const { openLoginModal, closeLoginModal,loggedIn,loggedOut } = LoginSlice.actions;
export default LoginSlice.reducer;
