import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CheckoutSteps from './CheckoutSteps';
import { goToNextStep } from '../../Features/General/navigationSlice';
 // These actions would be defined in your user slice

 
 function AccountDetails() {
    
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const dispatch=useDispatch();
     const handlebuttonClick=(e)=>{
       e.preventDefault();
       dispatch(goToNextStep())
     }
    return (
     <div>
     <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Account details</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-[#E2E8F0] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-[#E2E8F0] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex items-center justify-end gap-10">
          <button className="inline-block align-baseline text-gray-700 text-base font-medium font-['Inter'] hover:text-blue-800" onClick={() => alert('Register')}>
            Register for account
          </button>
          <button  className="w-36 h-14  rounded-lg bg-blue-500 text-white  hover:bg-blue-700" >
            Login
          </button>
        </div>
      </div>
      <hr />
      <div className="flex justify-end my-10">
        <button className="text-gray-700 text-base font-medium font-['Inter'] hover:text-blue-800 mr-4" onClick={() => alert('Cancel order')}>
          Cancel order
        </button>
        <button className="text-sm w-48 py-4 bg-blue-500 rounded-lg text-white hover:text-blue-800"onClick={handlebuttonClick}>
          Shipping details
        </button>
      </div>
     </div>
       
    );
}

export default AccountDetails;