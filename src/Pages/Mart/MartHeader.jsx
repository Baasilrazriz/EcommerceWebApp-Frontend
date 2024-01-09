import React, { useEffect } from 'react'
import Banner from '../../Components/HeadersComponents/Banner'
import Header from '../../Components/HeadersComponents/Header'
import Cart from '../../Components/GeneralComponents/Cart'
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, toggleCart } from "../../Features/Mart/cartSlice";
import { toast, ToastContainer } from 'react-toastify';

function MartHeader() {
    const dispatch = useDispatch();
    const isCartOpen= useSelector(state=>state.cart.isCartOpen)
    const userId = useSelector((state) => state.auth.userId);
    const fetchCartStatus= useSelector(state=>state.cart.fetchCartStatus);  
    useEffect(()=>{
      if(userId===null||userId==="")
{

}
else
{
  if (fetchCartStatus==="success"||fetchCartStatus==="pending") {
    console.log("cat loaded")
  }
  else
  {
    if(fetchCartStatus===""||fetchCartStatus==="failed")
    {
      dispatch(fetchCart(userId));
    }

  }
}
    },[fetchCartStatus])
    const handleToggleCart = () => {
      if(userId===null||userId==="")
      {
        toast.error("Please Login in first to view the cart ", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          
        });
     }
     else
     {
             dispatch(toggleCart(userId))
        
           }
      
       };

    const items= useSelector(state=>state.product.products);
    return (
        <>

        <div>
           <Banner />
      <Header toggleCart={handleToggleCart} />
      {isCartOpen && (
        <div className="absolute right-1 inline-flex   w-[25%] ">
          <Cart />
        </div>
      )}
      </div>

        </>
    )
}

export default MartHeader
