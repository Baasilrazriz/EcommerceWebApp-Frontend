import React from 'react'
import TableComponent from './TableComponent'
import DashboardPage1 from './DashboardPage1'
import SideBar from './SideBar'
import NavBar from './NavBar'
import { useSelector } from 'react-redux'

function Dashboard() {
  const step = useSelector((state) => state.forgot.step);
    return (
      <div  className='flex gap-2 ' >
   <div>
   <SideBar/>
   </div>
   <div className='w-full h-full'>
   
   
   <DashboardPage1/> 
   {/* {step === 1 && <FogotPage1 />}
      {step === 2 && <FogotPage2 />}
      {step === 3 && <FogotPage3 />}
      {step === 4 && <FogotPage4 />}
      {step === 5 && <FogotPage5 />} */}
   </div>
    </div>
    )
}

export default Dashboard
