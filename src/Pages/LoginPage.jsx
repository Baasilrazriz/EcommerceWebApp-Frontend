import React from 'react'
import MartHeader from './Mart/MartHeader'

import Login from '../Components/LoginComponents/Login'
import { useSelector } from 'react-redux';

import MartHome from './Mart/MartHome';


function LoginPage() {
    
    return (
        
    <div className="bg-white ">
    <MartHeader/>
    <div
        className={` mt-28 flex flex-row w-full   px-10  justify-around `}
      >
         <Login/>
         
</div>

  </div>
    )
}

export default LoginPage
