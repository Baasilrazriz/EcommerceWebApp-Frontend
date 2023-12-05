import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    role: null,
    email: '',
    password: '',
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
  },
});

export const { setUserRole, setEmail, setPassword } = userSlice.actions;

export default userSlice.reducer;