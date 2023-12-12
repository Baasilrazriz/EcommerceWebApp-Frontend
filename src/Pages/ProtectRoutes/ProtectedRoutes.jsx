import React, { Children } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate,Outlet } from 'react-router-dom';
import { openLoginModal } from '../../Features/Mart/LoginSlice';
import LoginModal from '../../Components/LoginModal';

function ProtectedRoutes() {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    
        if(!isLoggedIn) 
    {
        return <Navigate to="/auth" />}
        return <Outlet/>
    
}

export default ProtectedRoutes
