import React, { useRef, useState } from 'react';
import TableComponent from '../TableComponent';
import NavBar from '../NavBar';
import { DeleteUser, fetchUserByUsername, fetchUsers } from '../../../Features/Dashboard/usersInfoSlice';
import { useDispatch, useSelector } from 'react-redux';

function DashboardDeleteUser(props) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const userByUsername=useSelector(state=>state.user.userByUsername);
    const confirm=useSelector(state=>state.landingPage.confirm);
    const handleSearch=(event)=>{
        event.preventDefault();
        dispatch(fetchUserByUsername(username))
      }
      const handleSubmit=async(event)=>{
        event.preventDefault();
         await dispatch(DeleteUser(userByUsername.userID));
dispatch(fetchUsers())
        


      }

    return (
        
        <>
        <div className=' border rounded-xl h-fit mt-3 p-2 w-full overflow-hidden    shadow-lg'>
     <NavBar/>
    
    </div>
     
    <div className=' border rounded-xl h-[39.8rem] my-2  p-2 py-5 w-full overflow-hidden    shadow-lg'>
<h1 className="text-left text-4xl font-bold   text-gray-700 px-6 ">Delete User</h1>

                    <div className='my-10 flex flex-col al items-center w-full '>
                        <label htmlFor="username" className='text-left text-xl font-bold   text-red-600'>Enter the username of the user you want to update *</label> 
<div class="relative h-11    w-80 shadow-lg">
                      <input
                      type="text"
                        placeholder=""
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        class="peer h-full w-full rounded-md border  order border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                      <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Username
                      </label>
                    </div>
                    <button
                        onClick={handleSearch}
                        className="relative top-3 left-2  bg-blue-500 hover:bg-blue-800 text-white text-2xl font-bold h-10 w-[12rem]   rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                      >
                       search User
                      </button>    
          </div>
<form action="" className='pt- mx-20 my-8 flex flex-col gap-5' method="post" onSubmit={handleSubmit}>

<div className="flex justify-center">
                <div className=' h-44 w-44 rounded-full shadow-lg shadow-neutral-950 overflow-hidden'>
                      <img 
                  src={userByUsername.image?userByUsername.image:"../assets/admin.png"}
                      className=" h-full w-full object-cover"
                      >
                      </img>
                          
                                          </div>
                
</div>
<div className='flex gap-5 mx-52 mt-5'>
<div class="relative h-11 w-full shadow-lg">
                      <input
                      type="text"
                        placeholder=""
                        value={userByUsername.username}
                        class="peer h-full w-full rounded-md border  order border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                      <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      username
                      </label>
                    </div>
                    <div class="relative h-11 w-full shadow-lg">
                      <input
                      type="text"
                        placeholder=""
                        value={userByUsername.email}
                        class="peer h-full w-full rounded-md border  order border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      />
                      <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
email
                      </label>
                    </div>                   
         
           
</div>

<div className="flex justify-center mt-5">

                      <button
                        type="submit"
                        className="  bg-red-600 hover:bg-red-800 text-white text-2xl font-bold h-14 w-[17rem]  rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
                      >
                        
                        Delete Seller
                      </button>

                      
                
</div>
</form>
        
   </div>
 
   </>
        
  
    );
}

export default DashboardDeleteUser;