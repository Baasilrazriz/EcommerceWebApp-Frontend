import React from 'react'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
import DashboardHome from './DashboardHome'
import DashboardAddSeller from './SellerInfoComponents/DashboardAddSeller';
import DashboardUpdateSeller from './SellerInfoComponents/DashboardUpdateSeller';
import DashboardViewSeller from './SellerInfoComponents/DashboardViewSeller';
import DashboardDeleteSeller from './SellerInfoComponents/DashboardDeleteSeller';

function Dashboard() {
  const step = useSelector((state) => state.forgot.step);
    return (
      <div  className='flex gap-2 ' >
   <div>
   <SideBar/>
   </div>
   <div className='w-full h-full mx-2'>
   
   

   {step === 1 &&    <DashboardDeleteSeller/> }
      {/* {step === 2 && <DashboardPage2/>}
      {step === 3 && <DashboardPage3/>}
      {step === 4 && <DashboardPage4/>}
      {step === 5 && <FogotPage5 />} */}
   </div>
    </div>
    )
}

export default Dashboard
