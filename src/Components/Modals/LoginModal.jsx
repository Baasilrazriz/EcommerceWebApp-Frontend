// LoginModal.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeLoginModal, loggedIn, loggedOut } from "../../Features/Mart/LoginSlice";
import { setUserRole, togglePasswordVisibility } from "../../Features/Mart/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { openforgotModal } from "../../Features/Mart/forgotSlice";
import ForgotPasswordModal from "./ForgotPasswordModal";
import SignUpModal from "./SignUpModal";
import GoogleButton from "../LoginComponents/GoogleButton";
import Login from "../LoginComponents/Login";

const LoginModal = () => {
  const isLoginModal = useSelector((state) => state.auth.isLoginModalOpen);



  return (
    <>
    
      {isLoginModal && (
       <Login/>
      )}
      <ForgotPasswordModal/>
      <SignUpModal/>
    </>
  );
};

export default LoginModal;
