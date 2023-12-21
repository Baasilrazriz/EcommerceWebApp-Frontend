import React from 'react'
import Banner from '../../Components/HeadersComponents/Banner'
import Header from '../../Components/HeadersComponents/Header'
import Cart from '../../Components/GeneralComponents/Cart'
import MartHome from './MartHome'
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../Features/Mart/cartSlice";

function MartHeader() {
    const dispatch = useDispatch();
    const isCartOpen= useSelector(state=>state.cart.isCartOpen)
  
    const handleToggleCart = () => {
      dispatch(toggleCart());
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
