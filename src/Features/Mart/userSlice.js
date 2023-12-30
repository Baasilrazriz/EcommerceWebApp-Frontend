import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://localhost:7158/Auth/login', {
        username,
        password
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

const userSlice = createSlice({
  name: 'auth',
  initialState: {
    role: null,
    username: '',
    email:'',
    isAuthenticated: false,
    password: '',
    profilepic:'',
    showPassword:false
  },
  reducers: {
    togglePasswordVisibility:(state,action)=>{
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
      state.password = action.payload;
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
    // [logoutUser.fulfilled]: (state, action) => {
    //   state.isAuthenticated = false;
    //   // Reset state to initial state or perform other cleanup
    // },
    // Handle pending and rejected states if necessary
  },
});

export const {setProfilePic, setUserRole,setEmail, setUsernames, setPassword,togglePasswordVisibility } = userSlice.actions;

export default userSlice.reducer;
