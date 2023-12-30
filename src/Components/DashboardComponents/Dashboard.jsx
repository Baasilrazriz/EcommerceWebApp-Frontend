import React from 'react'
import TableComponent from './TableComponent'
import DashboardPage1 from './DashboardPage1'
import SideBar from './SideBar'
import NavBar from './NavBar'

function Dashboard() {
    return (
      <div  className='flex gap-2 ' >
   <div>
   <SideBar/>
   </div>
   <div className='w-full h-full'>
   
   
   <DashboardPage1/> 
   
   
    

   </div>
    </div>
    )
}

export default Dashboard
