import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDiscountModal } from '../../Features/FoodDelivery/discountSlice';

function DiscountModal(props) {
    const dispatch = useDispatch();
    const isDiscountModalOpen = useSelector((state) => state.discount.isDiscountModalOpen);
    const [toggle,setToggle]=useState(false);
    const handleClose = () => {
      dispatch(closeDiscountModal());
      document.body.style.overflowY = "scroll";
      
    };
    const handleTermClick=()=>{
        setToggle(!toggle)
    };
    const contentHeight = toggle ? "h-[28rem]" : "h-[22rem]";
    return (
        <div>
         {isDiscountModalOpen && (
        <div className=" z-50 modal-overlay fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div className={` login-modal bg-white transition-all ease-in    ${contentHeight} w-[45rem] rounded-md overflow-hidden`}>
            <div className=''>
          <div className="flex justify-end mt-1 mr-1 "onClick={handleClose}>
                  <button
                    className="relative top-1 right-1  bg-red-500 text-white px-2 py-1 rounded-full transform transition-all duration-500 ease-in-out hover:scale-110   active:animate-bounce"
                    onClick={handleClose}
                  >
                    x
                  </button>
                </div>
           <div className='mt-[-1rem] mx-5 text-gray-800 flex flex-col gap-7'>
           <h1 className=' text-2xl font-[600]  font-sans '>{}</h1>     
<div>
<div className=" w-66">
        <div className="flex gap-2">
          <img
            className="mt-[-0.25rem]"
            height={10}
            width={30}
            src="../assets/FoodDelivery/discount.png"
            alt=""
          />
          <h1 className="flex flex-col justify-center text-[24px] font-[Open Sans] font-[600]">
{props.title}
          </h1>
        </div>
        <p className="mt-7 text-[18px] font-[Open Sans] text-gray-800  ">{props.desc}</p>
        <p className='mt-4 text-[18px] font-[Open Sans] text-gray-500'>Valid from 30 Nov 2023 - 30 Dec 2023</p>
        <p className='mt-4 text-[18px] font-[Open Sans] text-gray-800'>
Min. order Rs. 225.<br />
Automatically applied to cart 
</p>
<div className='flex gap-2 mt-14 p-1 rounded-full hover:bg-red-100 w-fit' onClick={()=>{handleTermClick()}}>
<h1 className='text-[26px] font-[Open Sans] font-[600]    text-red-500 ' >Terms & conditions</h1>
<button className='rounded-full hover:scale-105 text-xl font-bold pt-1  h-7 w-7 text-red-600 border border-gray-400 shadow-xl'>^</button>
</div>
<ul className=' text-red-800 mt-12'>
    <li>1) Valid for a minimum order of Rs.225</li>
    <li>2) Applicable for Delivery.</li>
    <li>3) Applicable only for selected products or categories.</li>
    <li>4) Additional T&C can apply</li>
</ul>
      </div>
    </div>           
           </div>


            </div>
            <div>
            </div>
          </div>
        </div>
      )}
        </div>
    );
}

export default DiscountModal;