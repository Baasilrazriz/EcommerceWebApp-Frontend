import React, { useState } from 'react';
import { applyDiscount } from '../../Features/Mart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function OrderSummary(props) {
    const dispatch = useDispatch();
  const  items  = useSelector((state) => state.cart.cartItems);
  const  discount  = useSelector((state) => state.cart.code);
  const  isValid  = useSelector((state) => state.cart.isValid);
const dis_amount=useSelector((state) => state.cart.amount);
  const [discountCode, setDiscountCode] = useState('');
  
  // Handles discount code input changes
  const handleDiscountCodeChange = (e) => {
    
      setDiscountCode(e.target.value);
    
  };

  // Applies the discount code
  const handleApplyDiscount = () => {
    if(!isValid)
    {
        dispatch(applyDiscount(discountCode.trim()));
    }
  };

  // Calculate the subtotal of cart items
  const subTotal = items.reduce( (total, item) => total + item.price * item.quantity,0);
  const tax = 3.45; // Fixed tax value for the example
  const shippingCost = 0; // Free shipping
  let grandtotal = 0;

  // Calculate the total
  let total = subTotal + tax + shippingCost;
  if (isValid) {    
     grandtotal = (total)-(total*(dis_amount/100));
     // Discount is subtracted from the total
  }
else{
    grandtotal = total;
}
    return (
        <div className="h-[33rem] w-[30rem] p-4  px-5  bg-white border border-gray-200 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Order Summary</h2>
        <div className="border-b pb-6">
          
          
          <div className="cart-items flex flex-col gap-2 overflow-x-hidden  overflow-y-scroll scroll  h-[11.5rem] my-2">
            
                {
                 items.length > 0?(  items.map((item, index) => (
                    <div key={index} className="border border-transparent shadow-lg gap-1   flex px-3   py-4">
                      <div className="border border-transparent shadow-lg overflow-hidden h-16 w-16">
                       <img className="h-full w-full object-fill" src={item.image} alt={item.name} />
                      </div>
    
                       <div className="cart-item__details flex flex-col gap-2  pr-4">
    
                        <div className=" flex justify-between gap-10">
                        <h4 className="text-md relative top-5 font-body  w-36">{item.name}</h4>
                        <p className=" w-10 flex gap-2 relative mt-5  font-semibold "><span>Rs </span>{item.price}</p>
                        </div>
                        
          
                      </div> 
                    </div>
                  ))): <h3 className=" font-sans  my-36 ml-32 font-semibold text-normal">No items in cart</h3>
              }
              
        </div>  
        </div>
        <div className="my-6">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Gift Card / Discount code"
              className="form-input block w-full p-2 border"
              value={isValid ? discount : discountCode}
              onChange={handleDiscountCodeChange}
              disabled={isValid}
            />
            <button
              onClick={handleApplyDiscount}
              className={`ml-3 px-4 py-2 border rounded ${
                isValid ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
              }`}
              disabled={isValid}
            >
              {isValid ? 'Applied' : 'Apply'}
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Sub total</span>
            <span>£{subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>£{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shippingCost === 0 ? 'Free' : `£${shippingCost.toFixed(2)}`}</span>
          </div>
          <div className={`flex justify-between text-lg font-semibold ${isValid ? 'text-green-500 ' : ' text'}`}>
            <span>Total</span>
            <span>£{grandtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
}

export default OrderSummary;