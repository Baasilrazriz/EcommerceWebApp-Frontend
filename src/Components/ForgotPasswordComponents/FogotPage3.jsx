import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendOtp, setEmail, setStep } from "../../Features/Mart/forgotSlice";
import { toast } from 'react-toastify';

function FogotPage3() {
  const dispatch = useDispatch();
const email=useSelector(state=>state.forgot.email)  
const validEmail=useSelector(state=>state.forgot.validEmail)  
const username=useSelector(state=>state.forgot.username)  
const handleEmail=(e)=>{
  dispatch(setEmail(e.target.value))
}
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validEmail===email)
    {
      const sendOtpPromise =dispatch(SendOtp({username,email}))
      

      toast.promise(
        sendOtpPromise,
        {
          pending: 'Sending OTP...',
          success: 'OTP sent successfully!',
          error: 'Failed to send OTP. Please try again.'
        }
      );
    }
    else
    {
      toast.error("invalid email ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
      });
    }
  };
  const medium = useSelector((state) => state.forgot.selectedDropdownValue);
  return (
    <div className="   ">
      <div className="mx-12  mt-20">
        <div className="flex flex-col gap-8">
          <div>
            <label htmlFor="">
              OTP will be sent on your {medium} confirm your details to ease the
              process
            </label>
          </div>
            <label class="relative ">
          <div class=" relative border-2 border-purple-400 w-full px-2 rounded-lg">
              <input
                class=" my-2 dark:border-white-400 dark:scale-100 border transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
                type="checkbox"
              />
             <span className="text-gray-800 absolute left-10 my-2 text-base">{email}</span>
          </div>
            </label>
            <div class="relative h-11 w-full min-w-[200px]">
         
         <input
         type="text"
           placeholder=""
           value={validEmail}
           onChange={handleEmail}
           class="peer h-full w-full rounded-md border  order border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
         />
         <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
         {medium}
         </label>
       </div> 
          <div className=" flex justify-center">
            <button
              className=" z-10 bg-purple-800 hover:bg-purple-500 text-white font-bold py-3 w-[17rem]  rounded-3xl shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
              onClick={handleSubmit}
            >
              Send OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FogotPage3;
