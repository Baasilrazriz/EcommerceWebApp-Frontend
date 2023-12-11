import {React , useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CloseCategoryDropdown,
  CloseUserDropdown,
  OpenCategoryDropdown,
  
  toggleUserDropdown,

} from "../Features/Mart/headerSlice";
import { NavLink } from "react-router-dom";
import LoginModal from "./LoginModal";
import { loggedOut, openLoginModal } from "../Features/Mart/LoginSlice";
import { updateSearchTerm } from "../Features/searchSlice";


function Header({ toggleCart }) {
  const dispatch = useDispatch();
  const { categoryDropdownOpen, userDropdownOpen } = useSelector(
    (state) => state.header
  );
  const searchTerm = useSelector(state=>state.search.searchTerm);
  const username=useSelector(state=>state.auth.username)
  const categories = useSelector((state) => state.category.cat);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const handleSignOut=()=>{
    dispatch(loggedOut());
    window.location.reload();
  }
  const handleOpenLoginModal = () => {
    if (isLoggedIn === false ) {
      document.body.style.overflowY = "hidden";
      dispatch(openLoginModal());
    } else {
      document.body.style.overflowY = "scroll";
      dispatch(toggleUserDropdown());
    }
  };
  const categoryDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the category dropdown if a click occurs outside of it
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        dispatch(CloseCategoryDropdown());
      }

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
  return (
    <>
      <div className="bg-white w-full fixed top-[3.5rem] left-0  z-40  gap-20 flex py-6 shadow    justify-between px-10">
        <div className=" flex gap-36">
          <div className="title text-center">
            <h1 className="text-black text-3xl font-bold font-['Inter'] leading-normal  tracking-wide">
              <NavLink to={"/"}>Exclusive</NavLink>
            </h1>
          </div>
        </div>

        <div className=" gap-14 flex" ref={categoryDropdownRef}>
          <div className="  rounded flex-col justify-center items-center  inline-flex">
            <form className="bg-white">
              <div class="flex bg-white">
                <div className="  relative flex-col">
                  <button
                    id="dropdown-button"
                    onClick={() => {
                      dispatch(OpenCategoryDropdown());
                    }}
                    class="flex-col   h-[2.75rem]  px-8  z-20 inline-flex justify-center text-xs font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button"
                  >
                    All categories
                  </button>
                  {categoryDropdownOpen && (
                    <ul
                      class="overflow-hidden absolute  -z-10  text-sm  bg-gray-200 text-gray-700 dark:text-gray-200 rounded-bl-lg rounded-br-lg  focus:ring-4 focus:outline-none focus:ring-gray-100  border border-gray-300 "
                      aria-labelledby="dropdown-button"
                    >
                      {categories.map((cat, index) => (
                        <li
                          className=" w-full text-center  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "
                          key={index}
                        >
                          <NavLink
                            to={`/category/${cat.name}`}
                            ClassName="text-blue-500"
                          >
                            {cat.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div class="relative h-[2.8rem] w-full bg-white">
                  <input
                    type="search"
                    id="search-dropdown"
                    value={searchTerm}
          onChange={(e) => dispatch(updateSearchTerm(e.target.value))}
                    class=" h-[2.75rem] pr-3 text-center  w-[30rem] z-20 text-sm text-gray-900 bg-gray-50  border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos, Design Templates..."
                    required
                  />
<NavLink  to="/search">

                  <button
                 
                    type="submit"
                    class="absolute top-0 left-[30rem] p-3 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="justify-center gap-6 flex h-10 my-1" ref={userDropdownRef}>
          <NavLink to={"/wishlist"}>
            <button className="w-8  ">
              <svg
                className=""
                width="32"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </NavLink>

          <button className="w-8 " onClick={toggleCart}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 5H7L10 22H26"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 16.6667H25.59C25.7056 16.6668 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.2648C27.8951 7.19223 27.8934 7.11733 27.8755 7.04553C27.8575 6.97372 27.8239 6.90679 27.7769 6.84957C27.73 6.79235 27.6709 6.74626 27.604 6.71463C27.5371 6.683 27.464 6.66662 27.39 6.66667H8"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div className="relative flex-col my-1">
            <button className="w-8 " onClick={handleOpenLoginModal}>
              <svg
                width="32"
                height="32"
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
            </button>
            <LoginModal />
            {userDropdownOpen && (
              <div
                class=" absolute right-0  z-50   my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600"
              >
                <div class="px-4 py-3">
                  <span class="block text-sm text-gray-900 dark:text-white">
                    {username}
                  </span>
                  <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {username}@gmail.com
                  </span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <button
                      
                      class="w-full block text-start px-4  py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Track your Order
                    </button>
                  </li>
                  <li>
                    <button
                      
                      class="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Order History
                    </button>
                  </li>
                  <li>
                    <button
                      
                      class="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Help
                    </button>
                  </li>
                  
                  <li>
                    <button
                     onClick={handleSignOut} 
                      class="w-full block text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
