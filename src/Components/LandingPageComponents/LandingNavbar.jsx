import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { CloseUserDropdown, toggleUserDropdown } from '../../Features/LandingPage/LandingPageSlice';
import { loggedOut } from '../../Features/Mart/userSlice';
import { openLoginModal } from '../../Features/Mart/LoginSlice';
import LoginModal from '../Modals/LoginModal';

function LandingNavbar(props) {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navigation=useNavigate()
    const profilepic=useSelector(state=>state.auth.profilepic)
    const { userDropdownOpen } = useSelector(
        (state) => state.landingPage
      );    
    const userDropdownRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        
        // Close the user dropdown if a click occurs outside of it
        if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
          dispatch(CloseUserDropdown());
        }
      };
  
      // Attach the event listener to the window
      window.addEventListener('click', handleClickOutside);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }, [dispatch]);  
    const handleSignOut=()=>{
        dispatch(loggedOut());
        window.location.reload();
      }
      const handleOpenLoginModal = () => {
    
        if (isLoggedIn === false ) {
          document.body.style.overflowY = "hidden";
          dispatch(openLoginModal());
          navigation('/auth')
        } else {
          document.body.style.overflowY = "scroll";
          dispatch(toggleUserDropdown());
        }
    
      };
    return (
        
<div >
    <nav class=" dark:bg-gray-800  shadow py-4 overflow-hidden ">
        <div class="px-8 mx-auto max-w-7xl">
            <div class="flex items-center justify-between h-16">
                <div class=" flex items-center">
                    <a class="" href="/">
                        <img class="w-48 h-48" src="../assets/logo-black.png" alt="Workflow"/>
                    </a>
                    <div class="hidden md:block">
                        <div class="flex items-baseline ml-64 space-x-4">
                            <a class="text-gray-700  hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
                                Home
                            </a>
                            <a class="text-gray-700 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
                                About Us
                            </a>
                            <a class="text-gray-700  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
                                Careers
                            </a>
                            <a class="text-gray-700  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" href="/#">
                                Contact us
                            </a>
                        </div>
                    </div>
                </div>


                <div class="block" ref={userDropdownRef}>
                    <div class="flex items-center ml-4 md:ml-6">
                        <div class="relative ml-3">
                            <div class="relative inline-block text-left">
                            <button className="w-10 h-10 rounded-full overflow-hidden" onClick={handleOpenLoginModal}>
            {isLoggedIn?<img className="h-full w-full object-fill" src={profilepic} alt="" srcset="" />
              :<svg
                width= "35"
                height="35"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="#DB4444" />
                <path
                  d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
}

            </button>
<LoginModal/>
            {userDropdownOpen && (

<div class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
<div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
    <a href="#" class="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
        <span class="flex flex-col">
            <span>
                Settings
            </span>
        </span>
    </a>
    <a href="#" class="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
        <span class="flex flex-col">
            <span>
                Account
            </span>
        </span>
    </a>
    <a onClick={()=>{handleSignOut()}} class="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
        <span class="flex flex-col">
            <span>
                Logout
            </span>
        </span>
    </a>
</div>
</div>         
            )}






                            </div>
                        </div>
                    </div>
                </div>



                <div class="flex -mr-2 md:hidden">
                    <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" class="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Home
                </a>
                <a class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Gallery
                </a>
                <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Content
                </a>
                <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                    Contact
                </a>
            </div>
        </div>
    </nav>
</div>

    );
}

export default LandingNavbar;