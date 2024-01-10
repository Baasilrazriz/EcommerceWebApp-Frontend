import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setselectedDropdownValue } from '../../Features/Mart/forgotSlice';

function FogotPage2() {
    const dispatch=useDispatch();
  
  const selectedValue = useSelector(state=>state.forgot.selectedDropdownValue);
let newValue
  const handleDropdownChange = (event) => {
     newValue = event.target.value;
    dispatch(setselectedDropdownValue(newValue));
  };
  
  const handleMediumSelection =  (e) => {
    e.preventDefault();
    dispatch(setStep(3))
    
    dispatch(setselectedDropdownValue(newValue));
  };
    return (
        <div className="   ">
     
          <div className="mx-12  mt-20">
   <div className="flex flex-col gap-8">
   <div>
          <label htmlFor="">Select a medium to receive an OTP in order to recover your password.</label>
         </div>
            <div className="">
            <select
            value={selectedValue}
            onChange={handleDropdownChange}
            className=" h-full w-full rounded-md    border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border-2 focus:border-cyan-500   focus:outline-0 ">
                     {selectedValue ? null : <option value="">Select a medium</option>}     
                        <option value="EMAIL">EMAIL</option>
                        
                        
                    </select>
            </div>
            
            <div className=" flex justify-center">
            <button
          
          className=" z-10 bg-purple-800 hover:bg-purple-500 text-white font-bold py-3 w-[17rem]  rounded-3xl shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
          onClick={handleMediumSelection}
        >
          Select
        </button>
            </div>
   </div>
            
          </div>
        
      </div>
    )
}

export default FogotPage2
