import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../Features/Mart/cartSlice';
// {items,setItems}
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const discount= 10;
    
      const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const grandtotal = total+140+(total*(discount/100));

  return (
        <>
            
<div className="border-2  shadow py-2  z-[9]  bg-white  fixed h-screen top-[9.55rem] w-[52.5vh] ">
<div className="flex flex-col items-center ">
    <img src="https://cdn-icons-png.flaticon.com/128/12115/12115163.png" className="h-16" alt="" srcset="" />
    <h3 className=" font-sans  font-thin  pb-6">30 mins</h3>
    <h3 className=" font-sans    font-semibold text-normal">Your order from Pandamart - Johar</h3>
  </div>
  
  <div className="cart-items flex flex-col gap-2 overflow-x-hidden  overflow-y-scroll scroll  h-[19.7rem] my-2">
              {items.map((item, index) => (
                <div key={index} className="border border-transparent shadow-lg gap-1   flex px-3   py-4">
                  <div className="border border-transparent shadow-lg overflow-hidden h-16 w-16">
                   <img className="h-full w-full object-fill" src={item.image} alt={item.name} />
                  </div>

                   <div className="cart-item__details flex flex-col gap-2  pr-4">

                    <div className=" flex justify-between gap-10">
                    <h4 className="text-md relative top-5 font-body  w-36">{item.name}</h4>
                    <p className=" w-10 flex gap-2 relative mt-5  font-semibold "><span>Rs </span>{item.price}</p>
                    </div>
                    
                    <div className=" w-10 h-8 relative  left-[9rem]">
                    <div className="flex items-center">
  {item.quantity === 1 ? (
    <button
      onClick={() => dispatch(removeItem(item.id))}
      className="bg-blue-500 text-white font-semibold  px-1 rounded-l py-[0.1rem]"
    >
      🗑️
    </button>
  ) : (
    <button
      onClick={() => dispatch(decrementQuantity(item.id))}
      className="bg-blue-500 text-white font-bold py-1 px-2 rounded-l"
    >
      -
    </button>
  )}
  <input
    type="text"
    className="w-14 text-center"
    value={item.quantity}
    readOnly
  />
  <button
    onClick={() => dispatch(incrementQuantity(item.id))}
    className="bg-blue-500 text-white font-bold py-1 px-2 rounded-r"
  >
    +
  </button>
</div>
    
                      </div>

                  </div> 
                </div>
              ))}
                {
                 items.length > 0
                ? <div className="flex flex-col px-4 gap-1 py-2  text-gray-800 font-semibold  bg-white">
                <div className="flex flex-row    gap-[7.3rem]">
                <h4 className="text-[18px] font-[400] font-sans  w-full">subtotal</h4>
                <h4 className="text-[18px] font-[400] font-sans  w-full">Rs. {total}</h4>
                   </div>
                   <div className="flex flex-row gap-[7.3rem]">
                <h4 className="text-[18px] font-[400] font-sans  w-full">delivery</h4>
                <h4 className="text-[18px] font-[400] font-sans  w-full">Rs. 140</h4>
                   </div>
                   <div className="flex flex-row  gap-[6rem]">
                <h4 className="text-[18px] font-[400] font-sans  w-full">discount({discount}%)</h4>
                <h4 className="text-[18px] font-[400] font-sans  w-full">Rs. {(total*(discount/100)).toFixed(2)} </h4>
                   </div>
              </div>
                : <h3 className=" font-sans  my-36 ml-32 font-semibold text-normal">No items in cart</h3>
              }
              
        </div>  
    

        <div className="cart-total">
        <div className="flex flex-row  gap-[6rem]">
        <h4 className="mx-5 py-2 text-[19px]  font-[700]   font-sans">Total: <span className="text-[10px] font-[700]">
(Incl. VAT)</span></h4>
                <h4 className="px-5 py-2 text-[19px]  font-[750]   font-sans">Rs.  {grandtotal.toFixed(2)} </h4>
                   </div>
              
              <button className="bg-blue-500 text-white font-bold  mt-3 ml-6 py-3 px-28 rounded">Go to Checkout</button>
            </div>
          
    </div>  
          </>
      );
    };
    
    export default Cart;
    
