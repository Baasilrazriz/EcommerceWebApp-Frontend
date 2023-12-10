import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoginModalOpen: false,
  isLoggedIn:false,
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
  },
});

export const { openLoginModal, closeLoginModal,loggedIn,loggedOut } = LoginSlice.actions;
export default LoginSlice.reducer;
