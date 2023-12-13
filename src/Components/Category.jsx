import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { setProdInCat } from '../Features/Mart/productSlice';

function Category() {
  const categories=useSelector(state=>state.category.cat)


  return (
    <div className=" h-[22rem]   w-full rounded-lg overflow-x-hidden overflow-y-scroll scroll  border border-gray-400 shadow-2xl">
      <ul className='  flex-col items-start  gap-4 inline-flex   bg-white   w-60   '>
        {categories.map((cat, index) => (
          <li className="ml-2 w-full text-left hover:bg-gray-50  text-black text-base font-normal  font-['Poppins'] leading-normal" key={index}>
            <NavLink to={`/category/${cat.name}`} ClassName="text-blue-500" >{cat.name}</NavLink>
          </li>
      ))}
      
        
      </ul>
      
    </div>
  );
}

export default Category;
