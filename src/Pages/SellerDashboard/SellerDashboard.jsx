import React, { useEffect } from 'react'
import SideBar from '../../Components/DashboardComponents/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import DashboardHome from '../../Components/DashboardComponents/DashboardHome'
import DashboardAddSeller from '../../Components/AdminDashboard/SellerInfoComponents/DashboardAddSeller';
import DashboardUpdateSeller from '../../Components/AdminDashboard/SellerInfoComponents/DashboardUpdateSeller';
import DashboardViewSeller from '../../Components/AdminDashboard/SellerInfoComponents/DashboardViewSeller';
import DashboardDeleteSeller from '../../Components/AdminDashboard/SellerInfoComponents/DashboardDeleteSeller';

import { fetchUsers } from '../../Features/Dashboard/usersInfoSlice';
import DashboardAddProduct from '../../Components/SellerDashboard/DashboardAddProduct';
import DashboardViewProduct from '../../Components/SellerDashboard/DashboardViewProduct';

function SellerDashboard    () {
    const page = useSelector((state) => state.sellerDashboard.page);
    const dispatch = useDispatch();
    useEffect(() => {
    
      dispatch(fetchUsers())
      console.log("USer data loader")
          }
        , dispatch);
    return (
      <div  className='flex gap-2 ' >
   <div>
   <SideBar role='seller'/>
   </div>
   <div className='w-full h-full mx-2'>
   
   

   {page === 1 &&  <DashboardHome/>}
   {page === 2 &&  <DashboardAddProduct/>}
   {page === 3 &&  <DashboardUpdateSeller/>}
   {page === 4 &&  <DashboardDeleteSeller/>}
   {page === 5 &&  <DashboardViewProduct/>}
      {/* {step === 2 && <DashboardPage2/>}
      {step === 3 && <DashboardPage3/>}
      {step === 4 && <DashboardPage4/>}
      {step === 5 && <FogotPage5 />} */}

{/* 

{page === 6 &&    <DashboardAddUser/> }
   {page === 7 &&    <DashboardUpdateUser/> }
   {page === 8 &&    <DashboardDeleteUser/> }
   {page === 9 &&    <DashboardViewUsers/> }
   {page === 10 &&    <DashboardAddRider/> }
   {page === 11 &&    <DashboardUpdateRider/> }
   {page === 12 &&    <DashboardDeleteRider/> }
   {page === 13 &&    <DashboardViewRider/> }
    */}
   </div>
    </div>
    )
}

export default SellerDashboard
