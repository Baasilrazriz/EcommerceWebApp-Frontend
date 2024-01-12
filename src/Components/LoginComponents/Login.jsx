import React, { useEffect, useState } from 'react'
import { openSignupModal } from '../../Features/Mart/signupSlice';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { openforgotModal } from '../../Features/Mart/forgotSlice';
import {closeLoginModal, loggedIn, loggedOut , loginUser, sendEmail, setUserRole, togglePasswordVisibility } from '../../Features/Mart/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import GoogleButton from "./GoogleButton";

function Login() {
    const dispatch = useDispatch();
    const navigate=useNavigate()      
    const showPassword = useSelector((state) => state.auth.showPassword);
    const userRole = useSelector((state) => state.auth.role); // Changed to state.login.role based on your initialState
    const [username,setUsername] =useState("");
    const [password,setPassword] =useState("");
    const email=useSelector(state=>state.auth.email)  
    
    const handleTogglePassword = () => {
      dispatch(togglePasswordVisibility()); // Dispatch togglePasswordVisibility action
    };
    const { role } = useSelector(state => state.auth);
    // useEffect(() => {
    //   if (role === 'Admin') {
    //     navigate('/admin-dashboard');
    //   }
    //   // Add more conditions for other roles if needed
    // }, [role, navigate]);  
    const handleRoleChange = (role) => {
      dispatch(setUserRole({ role })); // Updated to send an object
    };
    const  handleSubmit = async (e) => {
      
      e.preventDefault();
      
 if(userRole===null||userRole==="")
 {
  toast.error("kindly select your role to login", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    
    });
 }
 else
 {
  if(username!==""&&password!=="")
  {
    await dispatch(loginUser( {username, password} ))
    .then((action) => {
      if (action.payload && action.payload.role === 'Admin') {
        navigate('/dashboard'); // Adjust the route as necessary
      }
      // You can add more conditions for other roles
    });

    dispatch(sendEmail({email}));
  }
else
{
toast.error("username or password cannot be null", {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,

});

}
 }
      
    };
    const handleClose = () => {
     
      document.body.style.overflowY = "scroll";
      dispatch(closeLoginModal());
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
        <div className="  z-50 modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
        <div className="   login-modal bg-white   h-[33rem] w-[55rem] rounded-md overflow-hidden">
          <div className="flex h-full w-full ">
      
            <div className=" w-[53%] ">
              <img
                className="h-full  object-fill"
                src="../assets\loginbg1.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div className=" w-[47%]   ">
              <div className="flex justify-end  mr-1" onClick={handleClose}>
                <button
                  className="relative top-1  bg-red-500 text-white px-2 py-1 rounded-full transform transition-all duration-500 ease-in-out hover:scale-110   active:animate-bounce"
                  onClick={handleClose}
                >
                  x
                </button>
              </div>
              <h1 className=" uppercase font-bold text-gray-700 text-4xl flex justify-center">
                Login
              </h1>
              <div className="   ">
                <form className=" border-gray-700 " onSubmit={handleSubmit}>
                  <div className="my-5   flex  items-center gap-3 justify-center">
                    <button
                      type="button"
                      className={`h-20 w-18 p-2   border rounded-md text-base shadow-sm font-medium ${
                        userRole === "Admin"
                        ? " shadow-lg border-2 animate-pulse ring-purple-600 border-purple-500 focus:z-10 sm:text-sm text-purple-500 "
                          : "bg-white text-gray-600"
                      } transform transition-all duration-500 ease-in-out hover:scale-110  `}
                      onClick={() => handleRoleChange("Admin")}
                    >
                      <img
                        width="50"
                        height="50"
                        src="../assets\admin.png"
                        alt="administrator-male--v1"
                      />
                      Admin
                    </button>

                    <button
                      type="button"
                      className={`h-20 w-18 p-2  border rounded-md text-base shadow-sm font-medium ${
                        userRole === "User"
                        ? " shadow-lg border-2 animate-pulse ring-purple-600 border-purple-500 focus:z-10 sm:text-sm text-purple-500 scale-110"
                          : "bg-white text-gray-600"
                      }transform transition-all duration-500 ease-in-out hover:scale-110   `}
                      onClick={() => handleRoleChange("User")}
                    >
                      <img
                        width="50"
                        height="50"

                        src="../assets/shopping_4990616 (1).png"
                        alt=""
                        srcset=""
                      />
                      User
                    </button>
                    <button
                      type="button"
                      className={`h-20 w-18 p-2  border rounded-md text-base shadow-sm font-medium ${
                        userRole === "Seller"
                        ? " shadow-lg border-2 animate-pulse ring-purple-600 border-purple-500 focus:z-10 sm:text-sm text-purple-500 scale-110"
                          : "bg-white text-gray-600"
                      }transform transition-all duration-500 ease-in-out hover:scale-110   `}
                      onClick={() => handleRoleChange("Seller")}
                    >
                      <img 
                      width="50"
                      height="50"
                      src="../assets\seller.png" alt="" />
                      Seller
                    </button>
                    <button
                      type="button"
                      className={`h-20 w-18 p-2  border rounded-md text-base shadow-sm font-medium ${
                        userRole === "Rider"
                        ? " shadow-lg border-2 animate-pulse ring-purple-600 border-purple-500 focus:z-10 sm:text-sm text-purple-500 scale-110"
                          : "bg-white text-gray-600"
                      }transform transition-all duration-500 ease-in-out hover:scale-110   `}
                      onClick={() => handleRoleChange("Rider")}
                    >
                      <img
                      width="50"
                      height="50"
                      
                      src="../assets\food-delivery.png" alt="" />
                      Rider
                    </button>
                  </div>

                  <div className="flex flex-col gap-4 mx-14">
                    <div class="relative h-11 w-full min-w-[200px]">
                      <input
                      type="text"
                        placeholder=""
                        value={username||""}
                        onChange={(e) => dispatch(setUsername(e.target.value))}
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
                value={password||""}
                onChange={(e) => dispatch(setPassword(e.target.value))}
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
    )
}

export default Login
