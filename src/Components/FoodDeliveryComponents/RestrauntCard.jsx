import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReviewModal from "../Modals/ReviewModal";



const RestrauntCard = ({ image, name,description,handleAddToWishList}) => {
  
  return (
    
      <div className=" relative flex rounded-xl  hover:border-gray-300   h-66  w-full  hover:bg-gray-100 items-center justify-center border-2 shadow-lg overflow-hidden ease-in transition-all">
            <div className="w-[90vw] h-full flex gap-10">
    <div className="rounded-l-xl h-full w-1/2 overflow-hidden ml-[-1rem]">
            <NavLink to={`/fooddelivery/restraunts/${name}`} ClassName="-z-50 text-blue-500" >
    <img  src={image} alt={name} className="h-full w-full object-cover   " />
    </NavLink>
    </div>
    <div className="overflow-hidden w-1/2 flex flex-col gap-5 my-6">
        <h1 className="text-[28px] font-[Open Sans] text-gray-800 font-[600]">{name}</h1>
        <p className="text-[16px] font-[Open Sans] text-gray-600 w-[30rem] text-justify  font-medium">{description}</p>
    </div>
    
    <div className="flex items-center justify-center">
    
      <button
        className="  text-green-500 hover:bg-green-700 hover:text-white border-2 bg-white rounded-full px-4 py-3 absolute  top-2 right-3"
        onClick={handleAddToWishList}
      > 
  ♡      
      </button>
            <NavLink to={`/fooddelivery/restraunts/${name}`} onClick={()=>{<ReviewModal/>}} ClassName="-z-50 text-blue-500" >
      <button
        className=" text-green-500 hover:bg-green-700 hover:text-white border-2 bg-white rounded-full px-9 py-3 absolute  top-52 right-3"
        
      > 
  visit restraunt →
      </button>
  </NavLink>
    </div>
    </div> 
  </div>
  );
};

export default RestrauntCard;
