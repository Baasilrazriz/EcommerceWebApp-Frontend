import React, { useEffect } from 'react'
import SideBar from './SideBar'
import { useDispatch, useSelector } from 'react-redux'
import DashboardHome from './DashboardHome'
import DashboardAddSeller from '../AdminDashboard/SellerInfoComponents/DashboardAddSeller';
import DashboardUpdateSeller from '../AdminDashboard/SellerInfoComponents/DashboardUpdateSeller';
import DashboardViewSeller from '../AdminDashboard/SellerInfoComponents/DashboardViewSeller';
import DashboardDeleteSeller from '../AdminDashboard/SellerInfoComponents/DashboardDeleteSeller';
import DashboardAddUser from '../AdminDashboard/UserInfoComponents/DashboardAddUser';
import DashboardUpdateUser from '../AdminDashboard/UserInfoComponents/DashboardUpdateUser';
import DashboardDeleteUser from '../AdminDashboard/UserInfoComponents/DashboardDeleteUser';
import DashboardViewUsers from '../AdminDashboard/UserInfoComponents/DashboardViewUsers';
import DashboardAddRider from '../AdminDashboard/RiderInfoComponents/DashboardAddRider';
import DashboardUpdateRider from '../AdminDashboard/RiderInfoComponents/DashboardUpdateRider';
import DashboardDeleteRider from '../AdminDashboard/RiderInfoComponents/DashboardDeleteRider';
import DashboardViewRider from '../AdminDashboard/RiderInfoComponents/DashboardViewRider';
import { fetchUsers } from '../../Features/Dashboard/usersInfoSlice';

function Dashboard() {
    const page = useSelector((state) => state.adminDashboard.page);
    const dispatch = useDispatch();
    useEffect(() => {
    
      dispatch(fetchUsers())
      console.log("USer data loader")
          }
        , dispatch);
    return (
      <div  className='flex gap-2 ' >
   <div>
   <SideBar/>
   </div>
   <div className='w-full h-full mx-2'>
   
   

   {page === 1 &&    <DashboardHome/> }
   {page === 2 &&    <DashboardAddSeller/> }
   {page === 3 &&    <DashboardUpdateSeller/> }
   {page === 4 &&    <DashboardDeleteSeller/> }
   {page === 5 &&    <DashboardViewSeller/> }
   {page === 6 &&    <DashboardAddUser/> }
   {page === 7 &&    <DashboardUpdateUser/> }
   {page === 8 &&    <DashboardDeleteUser/> }
   {page === 9 &&    <DashboardViewUsers/> }
   {page === 10 &&    <DashboardAddRider/> }
   {page === 11 &&    <DashboardUpdateRider/> }
   {page === 12 &&    <DashboardDeleteRider/> }
   {page === 13 &&    <DashboardViewRider/> }
      {/* {step === 2 && <DashboardPage2/>}
      {step === 3 && <DashboardPage3/>}
      {step === 4 && <DashboardPage4/>}
      {step === 5 && <FogotPage5 />} */}
   </div>
    </div>
    )
}

export default Dashboard
