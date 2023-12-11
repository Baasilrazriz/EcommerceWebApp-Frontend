// LoginModal.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeLoginModal, loggedIn, loggedOut } from "../Features/Mart/LoginSlice";
import { setUserRole, togglePasswordVisibility } from "../Features/Mart/userSlice";
import { NavLink } from "react-router-dom";
import { openforgotModal } from "../Features/Mart/forgotSlice";
import ForgotPasswordModal from "./ForgotPasswordModal";
import {  openSignupModal } from "../Features/Mart/signupSlice";
import {setUsernames} from "../Features/Mart/userSlice"
import SignUpModal from "./SignUpModal";
import GoogleButton from "./GoogleButton";
const LoginModal = () => {
  const dispatch = useDispatch();
  
  const isLoginModal = useSelector((state) => state.login.isLoginModalOpen);
  const showPassword = useSelector((state) => state.auth.showPassword);
  const userRole = useSelector((state) => state.auth.role); // Changed to state.login.role based on your initialState

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleTogglePassword = () => {
    dispatch(togglePasswordVisibility()); // Dispatch togglePasswordVisibility action
  };

  const handleRoleChange = (role) => {
    dispatch(setUserRole({ role })); // Updated to send an object
  };



  const handleSubmit =  (e) => {
    e.preventDefault();
    if(username==="basil"&& password==="bas123")
    {
     dispatch(setUsernames(username)) 
      dispatch(loggedIn())
      dispatch(closeLoginModal())
      alert("success");
      document.body.style.overflowY = "scroll";
    }
    
    else
    {
      dispatch(loggedOut())
      alert("incorrect credentials or something went wrong");
    }
    // Dispatch loginUser with email and password
    // await dispatch(loginUser({ username, password }))
    //   .unwrap()
    //   .then((originalPromiseResult) => {
    //     // Handle success if needed
    //     alert(`${userRole} is logged in from ${username}`);
    //     dispatch(closeLoginModal());
    //   })
    //   .catch((rejectedValueOrSerializedError) => {
    //     // Handle error here, for example:
    //     alert("incorrect credentials or something went wrong");
    //   });
  };
  const handleClose = () => {
    dispatch(closeLoginModal());
    document.body.style.overflowY = "scroll";
  };

  const handleOpenForgortModal = () => {
    document.body.style.overflowY = "hidden";
    dispatch(closeLoginModal());
    dispatch(openforgotModal());
  };
  const  handleOpenSignupModal= ()=>{
    document.body.style.overflowY = "hidden";
    dispatch(closeLoginModal());
    dispatch(openSignupModal());
  }
  return (
    <>
    
      {isLoginModal && (
        <div className="  z-10 modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className="   login-modal bg-white   h-[33rem] w-[55rem] rounded-md overflow-hidden">
            <div className="flex h-full w-full ">
              <div className=" w-[53%] ">
                <img
                  className="h-full  object-fill"
                  src="assets\loginbg1.jpg"
                  alt=""
                  srcset=""
                />
              </div>
              <div className=" w-[47%]   ">
                <div className="flex justify-end mt-1 mr-1" onClick={handleClose}>
                  <button
                    className="relative top-0  bg-red-500 text-white px-2 py-1 rounded-full transform transition-all duration-500 ease-in-out hover:scale-110   active:animate-bounce"
                    onClick={handleClose}
                  >
                    x
                  </button>
                </div>
                <h1 className=" font-bold text-gray-700 text-4xl flex justify-center">
                  Login
                </h1>
                <div className="   ">
                  <form className=" border-gray-700 " onSubmit={handleSubmit}>
                    <div className="my-5  flex  items-center gap-3 justify-center">
                      <button
                        type="button"
                        className={`h-24 w-20 p-2   border rounded-md text-base shadow-sm font-medium ${
                          userRole === "Admin"
                            ? " focus:shadow-lg focus:border-2 focus:animate-pulse focus:ring-purple-600 focus:border-purple-500 focus:z-10 sm:text-sm text-purple-500"
                            : "bg-white text-gray-600"
                        } transform transition-all duration-500 ease-in-out hover:scale-110  `}
                        onClick={() => handleRoleChange("Admin")}
                      >
                        <img
                          width="80"
                          height="80"
                          src="assets\admin.png"
                          alt="administrator-male--v1"
                        />
                        Admin
                      </button>

                      <button
                        type="button"
                        className={`h-24 w-20 p-2  border rounded-md text-base shadow-sm font-medium ${
                          userRole === "Buyer"
                            ? " focus:shadow-lg focus:border-2 focus:animate-pulse focus:ring-purple-600 focus:border-purple-500 focus:z-10 sm:text-sm text-purple-500"
                            : "bg-white text-gray-600"
                        }transform transition-all duration-500 ease-in-out hover:scale-110   `}
                        onClick={() => handleRoleChange("Buyer")}
                      >
                        <img
                          width="80"
                          height="80"
                          src="assets\shopping_4990616 (1).png"
                          alt=""
                          srcset=""
                        />
                        Buyer
                      </button>
                      <button
                        type="button"
                        className={`h-24 w-20 p-2  border rounded-md text-base shadow-sm font-medium ${
                          userRole === "Seller"
                            ? " focus:shadow-lg focus:border-2 focus:animate-pulse focus:ring-purple-600 focus:border-purple-500 focus:z-10 sm:text-sm text-purple-500"
                            : "bg-white text-gray-600"
                        }transform transition-all duration-500 ease-in-out hover:scale-110   `}
                        onClick={() => handleRoleChange("Seller")}
                      >
                        <img src="assets\seller.png" alt="" />
                        Seller
                      </button>
                      <button
                        type="button"
                        className={`h-24 w-20 p-2  border rounded-md text-base shadow-sm font-medium ${
                          userRole === "Rider"
                            ? " focus:shadow-lg focus:border-2 focus:animate-pulse focus:ring-purple-600 focus:border-purple-500 focus:z-10 sm:text-sm text-purple-500"
                            : "bg-white text-gray-600"
                        }transform transition-all duration-500 ease-in-out hover:scale-110   `}
                        onClick={() => handleRoleChange("Rider")}
                      >
                        <img src="assets\food-delivery.png" alt="" />
                        Rider
                      </button>
                    </div>

                    <div className="flex flex-col gap-4 mx-12">
                      <div class="relative h-11 w-full min-w-[200px]">
                        <input
                        type="text"
                          placeholder=""
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          class="peer h-full w-full rounded-md border  order border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        username
                        </label>
                      </div>
                      <div class="relative h-11 w-full min-w-[200px]">
                <input
                  type={showPassword ? "text" : "password"} // Dynamic password type
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label
                  class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  Password
                </label>
                <button
                  type="button"
                  onMouseDown={handleTogglePassword}
                  onMouseUp={handleTogglePassword}
                  
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                </div >
                      
                      <div className="flex  justify-end">
                        <NavLink
                          className=" text-xs text-red-300 font-bold cursor-pointer relative border-none bg-transparent uppercase transition-all duration-400 ease-in hover:text-red-700 focus:text-red-600 hover:underline focus:underline hover:scale-105 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                          onClick={handleOpenForgortModal}
                        >
                          Forgot your Password?
                        </NavLink>
                        
                      </div>
<div className="flex flex-col gap-3">
  
<div className="flex justify-center">
                        <button
                          type="submit"
                          className=" bg-purple-800 hover:bg-purple-500 text-white font-bold py-3 w-[17rem]  rounded-3xl shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                        >
                          Login
                        </button>
                  
</div>
<div className="flex justify-center">
<GoogleButton/>
                  </div>
                      </div>
                      <div>
                        <p class="mt-1 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                          Don't have an account?
                          <NavLink
                            class=" ml-1 font-sans  font-bold leading-normal text-purple-600  transition-all duration-400 ease-in hover:text-purple-700  focus:text-purple-800 hover:underline focus:underline hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                            onClick={handleOpenSignupModal}

                          >
                            Sign up
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ForgotPasswordModal/>
      <SignUpModal/>
    </>
  );
};

export default LoginModal;
