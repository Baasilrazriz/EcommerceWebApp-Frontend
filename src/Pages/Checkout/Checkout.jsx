import React from 'react';
import CheckOutPage1 from '../../Components/CheckoutComponents/CheckOutPage1';
import MartHeader from "../Mart/MartHeader";
function Checkout() {
    return (
        <div>
            <MartHeader/>
            <div className=' mt-[12rem] mx-20'> <CheckOutPage1/></div>
        </div>
    );
}

export default Checkout;