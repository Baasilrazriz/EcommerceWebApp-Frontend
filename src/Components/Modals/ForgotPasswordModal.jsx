
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeforgotModal, setStep } from "../../Features/Mart/forgotSlice";
import FogotPage1 from "../ForgotPasswordComponents/FogotPage1";
import FogotPage2 from "../ForgotPasswordComponents/FogotPage2";
import FogotPage3 from "../ForgotPasswordComponents/FogotPage3";
import FogotPage4 from "../ForgotPasswordComponents/FogotPage4";
import FogotPage5 from "../ForgotPasswordComponents/FogotPage5";

const ForgotPasswordModal = () => {
    

  const dispatch = useDispatch();
  const step = useSelector((state) => state.forgot.step);
  const isForgotModal = useSelector((state) => state.forgot.isForgotModalOpen);

  const handleClose = () => {
    dispatch(closeforgotModal());
    document.body.style.overflowY = "scroll";
    dispatch(setStep(1))
  };

  return (
    <>
      {isForgotModal && (
        <div className=" z-20 modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className=" login-modal bg-white   h-[30rem] w-[55rem] rounded-md overflow-hidden">
            <div className="flex h-full w-full ">
              <div className=" w-[53%] ">
                <img
                  className="h-[30rem]  object-fill"
                  src="../assets\loginbg1.jpg"
                  alt=""
                  srcset=""
                />
              </div>

              <div className=" w-[47%]   ">
                <div className="flex justify-end mt-1 mr-1"onClick={handleClose}>
                  <button
                    className="relative top-0  bg-red-500 text-white px-2 py-1 rounded-full transform transition-all duration-500 ease-in-out hover:scale-110   active:animate-bounce"
                    onClick={handleClose}
                  >
                    x
                  </button>
                </div>
                <h1 className=" font-bold text-gray-700 text-4xl flex justify-center">
                  Forgot Password
                </h1>
                
      {step === 1 && <FogotPage1 />}
      {step === 2 && <FogotPage2 />}
      {step === 3 && <FogotPage3 />}
      {step === 4 && <FogotPage4 />}
      {step === 5 && <FogotPage5 />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgotPasswordModal;
