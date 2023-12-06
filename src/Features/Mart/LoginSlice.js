import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginModalOpen: false,
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isLoginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = LoginSlice.actions;
export default LoginSlice.reducer;
