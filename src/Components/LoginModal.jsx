// LoginModal.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeLoginModal } from "../Features/Mart/LoginSlice";
import { Login } from "./Login";
import { login, setEmail, setPassword, setUserRole } from "../Features/Mart/userSlice";

const LoginModal = () => {
  const isLoginModal = useSelector((state) => state.login.isLoginModalOpen);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.login.isAuthenticated);
  const userRole = useSelector((state) => state.user.role);
  
  const [email, setEmailLocal] = useState("");
  const [password, setPasswordLocal] = useState("");

  const handleRoleChange = (role) => {
    dispatch(setUserRole(role));
  };

  const handleEmailChange = (e) => {
    setEmailLocal(e.target.value);
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPasswordLocal(e.target.value);
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if (email === 'baasilrazriz@email.com' && password === 'bas123') {
        try {
          dispatch(login());
          alert(`${userRole} is is logged in from ${email}`);
          dispatch(closeLoginModal());    
          
        } catch (error) {
          alert("something went wrong")
        }
        
      } else {
        alert("incorrect credentials")
      }
  };

  const handleClose = () => {
    dispatch(closeLoginModal());
    document.body.style.overflowY = "scroll";
  };

  return (
    <>
      {isLoginModal && (
        <div className="  modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className="z-[999] login-modal bg-white   h-[28rem] w-[50rem] rounded-md overflow-hidden">
          
            <div className="flex h-full w-full ">
              <div className=" w-1/2 "><img className="h-[28rem]  object-cover" src="https://downloader.la/temp/[Downloader.la]-6570a9236fc97.jpg" alt="" srcset="" /></div>
              <div className=" w-1/2   ">
              <div className="flex justify-end mt-1 mr-1">
              <button
              className="relative top-0  bg-red-500 text-white px-3 py-2 rounded-full"
              onClick={handleClose}
            >
              x
            </button>
              </div>
                <div className="m-12   ">
                
                  <form className=" border-gray-700 " onSubmit={handleSubmit}>
                    <div className="my-5  flex  items-center gap-3 justify-center">
                      <button
                        type="button"
                        className={`w-full px-4 p-3 border rounded-md text-base shadow-sm font-medium ${
                          userRole === "Admin"
                            ? "bg-green-500 text-white"
                            : "bg-white text-gray-600"
                        }`}
                        onClick={() => handleRoleChange("Admin")}
                      >
      <img width="80" height="80" src="https://img.icons8.com/office/80/administrator-male--v1.png" alt="administrator-male--v1"/>
                        Admin
                      </button>
                      <button
                        type="button"
                        className={`w-full p-3 border rounded-md text-base shadow-sm font-medium ${
                          userRole === "Buyer"
                            ? "bg-green-500 text-white"
                            : "bg-white text-gray-600"
                        }`}
                        onClick={() => handleRoleChange("Buyer")}
                      >
                     <img src="assets\shopping_4990616 (1).png" alt="" srcset="" />
                        Buyer
                      </button>
                      <button
                        type="button"
                        className={`w-full px-4 p-3 border rounded-md text-base shadow-sm font-medium ${
                          userRole === "Seller"
                            ? "bg-green-500 text-white"
                            : "bg-white text-gray-600"
                        }`}
                        onClick={() => handleRoleChange("Seller")}
                      >
                        
                        Seller
                      </button>
                      <button
                        type="button"
                        className={`w-full p-3 border rounded-md text-base shadow-sm font-medium ${
                          userRole === "Rider"
                            ? "bg-green-500 text-white"
                            : "bg-white text-gray-600"
                        }`}
                        onClick={() => handleRoleChange("Rider")}
                      >
                        Rider
                      </button>
                    </div>
                    <div className="flex flex-col gap-5">
                      <input
                        type="email"
                        name="email"
                        className="  w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        placeholder="Type your Email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <input
                        type="password"
                        name="password"
                        className="  w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        placeholder="Type your password"
                        value={password}
                        onChange={handlePasswordChange}   
                      />
                      <button
                        type="submit"
                        className=" w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
