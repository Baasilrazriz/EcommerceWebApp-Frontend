import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserRole, setEmail, setPassword } from '../Features/Mart/userSlice';

export function Login() {
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.user.role);
  const [email, setEmailLocal] = useState('');
  const [password, setPasswordLocal] = useState('');

  const handleRoleChange = (role) => {
    dispatch(setUserRole(role));
    alert(`${role} is selected`)
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
    // Handle the form submission
  };

  return (
    <div className=" flex items-center justify-center  w-full relative top-24 ">
      
        
        <form className="mt-8 space-y-6 border-2 border-gray-700 p-10" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-3">
            <div className="flex items-center gap-3 justify-center">
              <button 
                type="button" 
                className={`w-full p-3 border rounded-md text-base font-medium ${userRole === 'Admin' ? 'bg-green-500 text-white' : 'bg-white text-gray-600'}`}
                onClick={() => handleRoleChange('Admin')}
              >
                Admin
              </button>
              <button 
                type="button" 
                className={`w-full p-3 border rounded-md text-base font-medium ${userRole === 'Buyer' ? 'bg-green-500 text-white' : 'bg-white text-gray-600'}`}
                onClick={() => handleRoleChange('Buyer')}
              >
                Buyer
              </button>
              <button 
                type="button" 
                className={`w-full p-3 border rounded-md text-base font-medium ${userRole === 'Seller' ? 'bg-green-500 text-white' : 'bg-white text-gray-600'}`}
                onClick={() => handleRoleChange('Seller')}
              >
                Seller
              </button>
              <button 
                type="button" 
                className={`w-full p-3 border rounded-md text-base font-medium ${userRole === 'Rider' ? 'bg-green-500 text-white' : 'bg-white text-gray-600'}`}
                onClick={() => handleRoleChange('Rider')}
              >
                Rider
              </button>

            </div>
            <input
              type="email"
              name="email"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Type your Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              name="password"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Type your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login
            </button>
          </div>
        </form>

      
    </div>
  );
}
