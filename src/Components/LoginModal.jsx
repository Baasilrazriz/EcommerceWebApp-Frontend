// LoginModal.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeLoginModal } from '../Features/Mart/LoginSlice';
import { Login } from './Login';

const LoginModal = () => {
  const isLoginModal = useSelector((state) => state.login.isLoginModalOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeLoginModal());
    document.body.style.overflowY="scroll"
  };

  return (
    <>
      {isLoginModal && (
        <div className="  modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className="z-[999] login-modal bg-white p-8 rounded-md">
            <h2 className="text-2xl mb-4">Login Form</h2>
           <Login/>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
