import React from 'react'
import MartHeader from './Mart/MartHeader'

import Login from '../Components/Login'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MartHome from './Mart/MartHome';


function LoginPage() {
    
    return (
        
    <div className="bg-white">
    <MartHeader/>
    <div
        className={`mt-28 flex flex-row w-full   px-10  justify-around `}
      >
         <Login/>
         
</div>

  </div>
    )
}

export default LoginPage
