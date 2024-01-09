import React, { useState } from "react";
import { NavLink } from "react-router-dom";



const ProductCard = ({id, image, name, price,handleAddToCart,handleAddToWishList}) => {
  
  return (
    
    <NavLink to={`/mart/products/${name}`} ClassName="text-blue-500" >
      <div id={id} className="relative flex flex-col     h-52  w-48  hover:bg-gray-100 items-center justify-center border-2 shadow-lg overflow-hidden">
    <img src={image} alt={name} className="  w-24 h-24 object-cover" />
    <h3 className="text-lg text-center  my-2 ">{name}</h3>
    <p className="text-gray-600 mb-2">Rs. {price}</p>
    <div className="flex items-center justify-center">
      <button
        className="text-green-500 hover:bg-green-700 hover:text-white border-2 bg-white rounded-full px-2 py-1 absolute  top-5 right-3"
        onClick={handleAddToWishList}
      > 
  ♡      
      </button>
      <button
        className=" text-green-500 hover:bg-green-700 hover:text-white border-2 bg-white rounded-full px-2 py-1 absolute  top-16 right-3"
        onClick={handleAddToCart}
      > 
  +      
      </button>
      
    </div>
  </div></NavLink>
  );
};

export default ProductCard;
