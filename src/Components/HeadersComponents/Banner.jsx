import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleTranslate from '../Translation/GoolgleTranslate';

function Banner() {
  
  const toggle = useSelector((state) => state.banner.toggle);

  return (
        <>
 <div className="w-full  fixed top-0 left-0  z-10 h-14 py-3 bg-black text-white justify-center inline-flex">
  <div className=" gap-[200px] inline-flex">

    <div className="justify-start items-center gap-2 flex">
      <div className="w-[474px] h-[18px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
      <div className="text-center text-neutral-50 text-sm font-semibold font-['Poppins'] underline leading-normal">ShopNow</div>
    </div>
   
    <div class=" rounded-lg bg-white overflow-hidden mt-1  inline-flex">
      
    {/* <GoogleTranslate /> */}
    
         
  </div>

  </div>
</div>        
        </>
    )
}

export default Banner
