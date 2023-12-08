// LoginModal.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeLoginModal } from "../Features/Mart/LoginSlice";
  
  import { loginUser, setUserRole} from "../Features/Mart/userSlice";
  const LoginModal = () => {
    const dispatch = useDispatch();
    const isLoginModal = useSelector((state) => state.login.isLoginModalOpen);
  
    const userRole = useSelector((state) => state.login.role); // Changed to state.login.role based on your initialState
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
  
    const handleRoleChange = (role) => {
      dispatch(setUserRole({ role })); // Updated to send an object
    
    };
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
  
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      alert({ username, password })
      // Dispatch loginUser with email and password
      dispatch(loginUser({ username, password }))
        .unwrap()
        .then((originalPromiseResult) => {
          // Handle success if needed
          alert(`${userRole} is logged in from ${username}`);
          dispatch(closeLoginModal());
        })
        .catch((rejectedValueOrSerializedError) => {
          // Handle error here, for example:
          alert("incorrect credentials or something went wrong");
        });
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
                        type="text"
                        name="username"
                        className="  w-full px-3 py-2 border-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        placeholder="Type your Email"
                        value={username}
                        onChange={handleUsernameChange}
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
