import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem, toggleCart, UpdateCart, setfetchCartStatus, fetchCart } from '../../Features/Mart/cartSlice';
import { useNavigate } from "react-router-dom";

// {items,setItems}
const Cart = () => {

  const userId = useSelector((state) => state.auth.userId);
    const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const fetchCartStatus = useSelector((state) => state.cart.fetchCartStatus);
  const discount= 10;

      const total = items.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
      const grandtotal = total+140-(total*(discount/100));
      const navigation=useNavigate()
const handleCheckOut=()=>{
  navigation('/checkout')
  dispatch(toggleCart())
}
  return (
        <>
            
<div className="border-2  shadow py-2  z-[9]  bg-white  fixed h-screen top-[9.55rem] w-[52.5vh] ">
<div className="flex flex-col items-center ">
    <img src="https://cdn-icons-png.flaticon.com/128/12115/12115163.png" className="h-16" alt="" srcset="" />
    <h3 className=" font-sans  font-thin  pb-6">30 mins</h3>
    <h3 className=" font-sans    font-semibold text-normal">Your order from DoorDash - Johar</h3>
  </div>
  
  <div className="cart-items flex flex-col gap-2 overflow-x-hidden  overflow-y-scroll scroll  h-[19.7rem] my-2">
              {items.map((item, index) => (
                <div key={index} id={item.cartId} className="border border-transparent shadow-lg gap-1   flex px-3   py-4">
                  <div className="border border-transparent shadow-lg overflow-hidden h-16 w-16">
                   <img className="h-full w-full object-fill" src={item.image} alt={item.name} />
                  </div>
  
                   <div className="cart-item__details flex flex-col gap-2  pr-4">

                    <div className=" flex justify-between gap-10">
                    <h4 className="text-md relative top-5 font-body  w-36">{item.productName}</h4>
                    <p className=" w-10 flex gap-2 relative mt-5  font-semibold "><span>Rs </span>{item.productPrice}</p>
                    </div>
                    
                    <div className=" w-10 h-8 relative  left-[9rem]">
                    <div className="flex items-center">
  {item.quantity === 1 ? (
    
    <button
      onClick={() => dispatch(removeItem(item.cartId))}
      className="bg-blue-500 text-white font-semibold  px-1 rounded-l py-[0.1rem]"
    >
      🗑️
    </button>
  ) : (
    <button
    
    onClick={
      async () => {
      if(item.quantity>1){
        dispatch(setfetchCartStatus(""));    
      try {
        await dispatch(UpdateCart({ quantity: item.quantity - 1, cart_id: item.cartId }));
         dispatch(fetchCart(userId));
      } catch (error) {
        console.error("Error updating cart:", error);
        // Handle error (show message to user, etc.)
      }
        
      }
 
    }
  }

      className="bg-blue-500 text-white font-bold py-1 px-2 rounded-l"
    >
      -
    </button>
  )}
  <input
    type="text"
    className="w-14 text-center"
    value={fetchCartStatus==="pending"?"...":item.quantity}
    readOnly
  />
  <button    
 onClick={async () => {
  dispatch(setfetchCartStatus(""));    
  try {
    await dispatch(UpdateCart({ quantity: item.quantity + 1, cart_id: item.cartId }));
     dispatch(fetchCart(userId));
  } catch (error) {
    console.error("Error updating cart:", error);
    // Handle error (show message to user, etc.)
  }
}}
  
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
                ? <div className="flex flex-col ml-5  px-4 gap-1 py-2  text-gray-800 font-semibold  bg-white">
                <div className="flex flex-row    gap-[7.3rem]">
                <h4 className="text-[18px] font-[400] font-sans  w-full">subtotal</h4>
                <h4 className="text-[18px] font-[400] font-sans  w-full">Rs. {total}</h4>
                   </div>
                   <div className="flex flex-row gap-[7.3rem]">
                <h4 className="text-[18px] font-[400] font-sans  w-full">delivery</h4>
                <h4 className="text-[18px] font-[400] font-sans  w-full">Rs. 140</h4>
                   </div>
                   <div className="flex flex-row  gap-[7rem]">
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
                <h4 className="px-5 py-2 text-[22px]  font-[750]   font-sans">Rs.  {grandtotal  } </h4>
                   </div>
              
              <button onClick={handleCheckOut} className="bg-blue-500 text-white font-bold  mt-3 ml-6 py-3 px-28 rounded">Go to Checkout</button>
            </div>
          
    </div>  
          </>
      );
    };
    
    export default Cart;
    
  