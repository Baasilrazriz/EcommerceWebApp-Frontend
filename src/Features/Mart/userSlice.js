import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'login',
  initialState: {
    role: null,
    email: 'basil',
    isAuthenticated:false,
    password: 'bas123',
  },
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setUserRole, setEmail, setPassword , login, logout } = userSlice.actions;

export default userSlice.reducer;