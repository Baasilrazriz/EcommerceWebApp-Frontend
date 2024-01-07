import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const initialState = {
  isLoginModalOpen: false,
  isLoggedIn:false,
  role: null,
  userId:null,
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
 
});

export const { openLoginModal, closeLoginModal,loggedIn,loggedOut } = LoginSlice.actions;
export default LoginSlice.reducer;
