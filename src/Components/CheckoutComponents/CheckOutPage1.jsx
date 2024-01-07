import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from './CheckoutSteps';
import { goToNextStep } from '../../Features/General/navigationSlice';
import AccountDetails from './AccountDetails';
import OrderSummary from './OrderSummary';
import ShippingDetails from './ShippingDetails';
import Payment from './Payment';
 // These actions would be defined in your user slice

 function CheckOutPage1() {
  const step = useSelector((state) => state.navigation.activeStep);
  return (
   <div className='flex gap-36 h-[75.2vh]   w-full'>
    <div className='w-2/3'>
    <div>
                <div className="h-[33rem]  py-10  px-48  bg-[#F7FAFC] shadow-md rounded-lg ">
      <div className="mb-4">
      <CheckoutSteps/>
      </div>
      {step === 0 && <AccountDetails/>}
      {step === 1 && <ShippingDetails />}
      {step === 2 && <Payment/>}
      
      
    </div>
        </div>

    </div>
<div className=' w-1/3'>
<OrderSummary/>
</div>
   </div>
  );
}
export default CheckOutPage1