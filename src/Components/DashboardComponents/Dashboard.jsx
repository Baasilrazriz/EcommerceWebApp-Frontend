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
   <div className=' border rounded-xl h-fit mt-3 p-2 w-full overflow-hidden    shadow-lg'>
    <NavBar/>
   
   </div>
    
   <div className=' border rounded-xl h-[40rem] mt-3 p-2 w-full overflow-hidden    shadow-lg'>
   <DashboardPage1/> 
   
   </div>
    

   </div>
    </div>
    )
}

export default Dashboard
